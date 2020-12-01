import React from 'react';
import { height, width } from '../../assets/globals/contant';
import Image from 'react-bootstrap/Image';
import { ListGroup, Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import phone from '../../assets/images/contact/phone.svg';
import email from '../../assets/images/contact/email.svg';
import address from '../../assets/images/contact/address.svg';
import ContactMap from './ConatctMap';
import Footer from '../footer/Footer';

const Contact = () => {
    return (
        <div>
            <div className="animate">
                <div className="contact-container" style={{ height: height }}>
                    <Badge pill variant="light" className="badge-title mx-auto">
                        Contacts
                    </Badge>
                    <Container className="mt-5">
                        <Row>
                            <Col md={12}>
                                <div className="conatct-add">
                                    <div className="add-part">
                                        <div>
                                            <h3 className="">AMOL THORAT</h3>
                                        </div>
                                    </div>
                                    <div className="add-part">
                                        <div>
                                            <Image
                                                src={phone}
                                                alt="land" fluid>
                                            </Image>&nbsp;&nbsp;
                                        </div>
                                        <div>
                                            +919763845901
                                        </div>
                                    </div>
                                    <div className="add-part">
                                        <div>
                                            <Image
                                                src={email}
                                                alt="land" fluid>
                                            </Image>&nbsp;&nbsp;
                                        </div>
                                        <div>
                                            satyamshivam99@gmail.com
                                        </div>
                                    </div>
                                    <div className="add-part3 ">
                                        <div className="d-flex">
                                            <Image
                                                src={address}
                                                alt="land" fluid>
                                            </Image>
                                            <span className="add-path">
                                                Satyam Shivam Sundaram Realtors <br />
                                                Phase-1 , Hinjewadi,Near Laxmi Chowk,<br />
                                                Marunji Road , Pune -411057
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <ContactMap />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;