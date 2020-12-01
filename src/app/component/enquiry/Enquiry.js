import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Footer from '../footer/Footer';
import { height } from '../../assets/globals/contant';
import emailjs from 'emailjs-com';
import Spinner from 'react-bootstrap/Spinner';

const Enquiry = () => {

    const defaultValue = {
        name: '',
        mobile: '',
        address: '',
        email: '',
        requirement: ''
    }
    const [formValue, setFormValue] = useState(defaultValue);
    const [mailStatus, setMailStatus] = useState(false);

    const setInputValue = (e, IName) => {
        setFormValue((prevState) => ({
            ...prevState,
            [IName]: e.target.value,
        }));
    }

    function sendEmail(e) {
        e.preventDefault();
        setMailStatus(true);
        setTimeout(() => {
            setMailStatus(false);
            setFormValue(defaultValue);
            emailjs.sendForm('service_3olr4lo', 'template_0vznp4f', e.target, 'user_XlqDHQK7InPzbg60HggYC')
                .then((result) => {
                    console.log("Success", result.text);
                }, (error) => {
                    console.log("Error", error.text);
                });
        }, 2000)
    }

    return (
        <div className="animate">
            <div className="enquiry-container" style={{ height: height }}>
                <Form.Label className="mt-5">
                    <Badge pill variant="light" className="badge-title">
                        Enquiry Form
                    </Badge>
                </Form.Label>
                <Container className="form-wrapper">
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={sendEmail}>
                                <Form.Group controlId="formGridName">
                                    <Form.Label className="d-flex">Name</Form.Label>
                                    <Form.Control placeholder="Enter customer full name" name="from_name"
                                        value={formValue.name}
                                        onChange={(e) => {
                                            setInputValue(e, 'name')
                                        }} />
                                </Form.Group>
                                <Form.Group controlId="formMobile">
                                    <Form.Label className="d-flex">Mobile Number</Form.Label>
                                    <Form.Control placeholder="Enter customer mobile number" name="from_mobile"
                                        value={formValue.mobile}
                                        onChange={(e) => {
                                            setInputValue(e, 'mobile')
                                        }} />
                                </Form.Group>
                                <Form.Group controlId="formGridAddress">
                                    <Form.Label className="d-flex">Address</Form.Label>
                                    <Form.Control placeholder="Enter customer address" name="from_address"
                                        value={formValue.address}
                                        onChange={(e) => {
                                            setInputValue(e, 'address')
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="d-flex">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter customer email" name="from_email"
                                        value={formValue.email}
                                        onChange={(e) => {
                                            setInputValue(e, 'email')
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicDescriptio">
                                    <Form.Label className="d-flex">Requirement</Form.Label>
                                    <Form.Control as="textarea" placeholder="Enter full description " rows={3} name="message"
                                        value={formValue.requirement}
                                        onChange={(e) => {
                                            setInputValue(e, 'requirement')
                                        }}
                                    />
                                </Form.Group>
                                <div className="d-flex justify-content-end">
                                    {
                                        !mailStatus
                                            ?
                                            <Button variant="outline-primary" type="submit">
                                                Submit
                                            </Button>
                                            :
                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Sending...
                                            </Button>
                                    }
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Enquiry;