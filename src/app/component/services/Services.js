import { useState } from 'react';
import { height } from '../../assets/globals/contant';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Footer from '../footer/Footer';
import { ListGroup, Image } from 'react-bootstrap';
import arrow from '../../assets/images/service/arrow.svg';

const Services = () => {
    const [key, setKey] = useState('Buy');

    return (
        <div className="animate">
            <div className="services-container" style={{ height: height }}>
                <Form.Label className="mt-5 mb-5">
                    <Badge pill variant="light" className="badge-title">
                        Services
                    </Badge>
                </Form.Label>
                <div className="form-wrapper m-auto mt-15">
                    <Nav fill variant="tabs" defaultActiveKey="Buy">
                        <Nav.Item>
                            <Nav.Link eventKey="Buy" onSelect={() => { setKey('Buy') }}>Buy</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="Sell" onSelect={() => { setKey('Sell') }}>Sell</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="Rent" onSelect={() => { setKey('Rent') }}>Rent</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="Property" onSelect={() => { setKey('Property') }}>Property Management</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div className="nav-data mt-10">
                        {
                            key === 'Buy' &&
                            <div className="item-key">
                                <ListGroup style={{ width: '100%' }}>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                      All type Property Buy
                                        </ListGroup.Item>
                                </ListGroup>
                            </div>
                        }
                        {
                            key === 'Sell' &&
                            <div className="item-key">
                                <ListGroup style={{ width: '100%' }}>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                       All type Property Sell
                                        </ListGroup.Item>
                                </ListGroup>
                            </div>
                        }
                        {
                            key === 'Rent' &&
                            <div className="item-key">
                                <ListGroup style={{ width: '100%' }}>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                       All type Property Rent
                                        </ListGroup.Item>
                                </ListGroup>
                            </div>
                        }
                        {
                            key === 'Property' &&
                            <div className="item-key">
                                <ListGroup style={{ width: '100%' }}>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                        Property Caretaker
                                        </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                        Legal Services</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                        Land Development</ListGroup.Item>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                        Construction , Renovation and Property Maintenance </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Image
                                            src={arrow}
                                            alt="arrow" fluid>
                                        </Image>&nbsp;&nbsp;
                                        Property Consultant and Guidance</ListGroup.Item>
                                </ListGroup>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services;