import React from 'react';
import { height, width } from '../../assets/globals/contant';
import Image from 'react-bootstrap/Image';
import { ListGroup, Tabs, Tab, Row, Col, Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';



const ContactMap = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="conatct-map">
                            <Col md={12} style={{ height: height - 450, padding: '0px' }} s>
                                <iframe className="contact-map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=marunji%20road%2Chinjewadi%2Cpune%2Cmaharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactMap;