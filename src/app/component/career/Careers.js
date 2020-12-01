import React from 'react';
import { height } from '../../assets/globals/contant';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/Footer';

function Careers(props) {
    return (
        <div className="animate">
            <div className="careers-container" style={{ height: height }}>
                <Form.Label className="mt-5">
                    <Badge pill variant="light" className="badge-title">
                        Careers
                    </Badge>
                </Form.Label>
                <div className="form-wrapper mt-5">

                    <h4>
                        Career Opportunities
                    </h4>
                    <p>
                        7 Open Positions
                    </p>


                    <Accordion defaultActiveKey="-1">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Sales
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    As a Senior Strategy Manager, Sales Intelligence, you’ll have the opportunity to take part in full ownership of SimilarWeb’s Sales solution. This will include strategy, commercial ownership, and operational execution to drive business results.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Legal
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    As the most trusted platform for understanding online behavior, millions of people rely on SimilarWeb insights daily as the ground truth for their knowledge of the digital world. We empower anyone — from the curious individual to the enterprise business leader — to make smarter decisions by understanding why things happen across the digital ecosystem
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Supervisor
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    As the most trusted platform for understanding online behavior, millions of people rely on SimilarWeb insights daily as the ground truth for their knowledge of the digital world. We empower anyone — from the curious individual to the enterprise business leader — to make smarter decisions by understanding why things happen across the digital ecosystem
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Customer Care
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    As the most trusted platform for understanding online behavior, millions of people rely on SimilarWeb insights daily as the ground truth for their knowledge of the digital world. We empower anyone — from the curious individual to the enterprise business leader — to make smarter decisions by understanding why things happen across the digital ecosystem
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    Office Assistant
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    As the most trusted platform for understanding online behavior, millions of people rely on SimilarWeb insights daily as the ground truth for their knowledge of the digital world. We empower anyone — from the curious individual to the enterprise business leader — to make smarter decisions by understanding why things happen across the digital ecosystem
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    Admin
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                    As the most trusted platform for understanding online behavior, millions of people rely on SimilarWeb insights daily as the ground truth for their knowledge of the digital world. We empower anyone — from the curious individual to the enterprise business leader — to make smarter decisions by understanding why things happen across the digital ecosystem
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                    Reception
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    As the most trusted platform for understanding online behavior, millions of people rely on SimilarWeb insights daily as the ground truth for their knowledge of the digital world. We empower anyone — from the curious individual to the enterprise business leader — to make smarter decisions by understanding why things happen across the digital ecosystem
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Careers;