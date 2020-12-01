import React from 'react';
import { height, width } from '../../assets/globals/contant';
import { ListGroup, Tabs, Tab, Button, Col, Container, Row, Image } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Footer from '../footer/Footer';
import bussinessMan from '../../assets/images/about/bussinessMan.jpg';
import tick from '../../assets/images/about/tick.svg';
import dash from '../../assets/images/about/dash.svg';

const About = () => {
    return (
        <div className="animate">
            <div className="about-container" style={{ height: height }}>
                <div className="mt-5">
                    <Badge pill variant="light" className="badge-title">
                        About
                    </Badge>


                    <div style={{ width: width - 500 }} className="about-data mt-5">
                        <Row>
                            <Col md={5}>
                                <Image className="about-image" src={bussinessMan} fluid />
                            </Col>

                            <Col md={7}>
                                <h3 className="about-title" >About Us</h3>
                                <Image className="about-icon-dash" src={dash} />&nbsp;Satyam Shivam Sundaram Realtors has been operating in the real estate business since 2012. The owner of the company, Amol Thorat, aims to make people dream of owning their own home or place. <br />
                                <Image className="about-icon-dash" src={dash} />&nbsp;The firm has done a good job in the last few years in Pune and its environs to honestly and selflessly consider the difficulties in the real estate sector and help people to fulfill their dreams.
                                <br /><Image className="about-icon-dash" src={dash} />&nbsp;Also, the company does not just do the job of buying and selling a place or a house to the people. The purpose of the company is not only to buy and sell but also to satisfy the people. Therefore, apart from purchasing through the company, other types of services related to real estate are also provided. So the customer does not need to rush. And all the services are available through the company.
                                <br />
                                <Image className="about-icon-dash" src={dash} />&nbsp;These types of services are provided through the company :- <br />
                                <Container style={{ lineHeight: '2' }}>
                                    <Row>
                                        <Col md={6}>
                                            <Image className="about-icon-check" src={tick} />&nbsp;&nbsp;&nbsp;Buy and Sell the Property
                                        </Col>
                                        <Col md={6}>
                                            <Image className="about-icon-check" src={tick} />&nbsp;&nbsp;&nbsp;Take Care of Property
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Image className="about-icon-check" src={tick} />&nbsp;&nbsp;&nbsp;Provide Legal Services for it
                                        </Col>
                                        <Col md={6}>
                                            <Image className="about-icon-check" src={tick} />&nbsp;&nbsp;&nbsp;Manage the Property Properly
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Image className="about-icon-check" src={tick} />&nbsp;&nbsp;&nbsp;Guide for Construction
                                        </Col>
                                    </Row>
                                </Container>
                                <Image className="about-icon-dash" src={dash} />&nbsp;So the company takes care of the customer's property wherever he is in the country or outside the country and makes the customer tension free.
                                For that, you must visit once. We are not just a transaction, we have to experience the fact that we connect and take care of it.
                            </Col>
                        </Row>
                    </div>
                </div>
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default About;