import React, { useState } from 'react';
import { height, width } from '../../assets/globals/contant';
import Image from 'react-bootstrap/Image';
import { ListGroup, Tabs, Tab, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Footer from '../footer/Footer';
import house from '../../assets/images/projects/house.svg';
import appartment from '../../assets/images/projects/appartment.svg';
import farmHouse from '../../assets/images/projects/farmHouse.svg';
import agriculture from '../../assets/images/projects/agriculture.svg';
import ProjectStatus from './projectStatus';


const Project = () => {
    const [type, setType] = useState('plots');


    const type1 = () => {
        return (

            <Tab eventKey="home" title="Bunglow">
                <ListGroup>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>
                        Hinjewadi
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Marunji
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Maan
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Jambe
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Nehre
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Kasar
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Chandkhed
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Chakan
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={house}
                            alt="house" fluid>
                        </Image>Alandi
                    </ListGroup.Item>
                </ListGroup>
            </Tab>
        )
    }

    const type2 = () => {
        return (
            <Tab eventKey="farm" title="Farm House">
                <ListGroup>
                    <ListGroup.Item>
                        <Image
                            src={farmHouse}
                            alt="farmHouse" fluid>
                        </Image>
                        Kamshet
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={farmHouse}
                            alt="farmHouse" fluid>
                        </Image>Bhor
                    </ListGroup.Item>
                </ListGroup>
            </Tab>
        )


    }

    const type3 = () => {
        return (
            <Tab eventKey="agriculture" title="Agriculture">
                <ListGroup>
                    <ListGroup.Item>
                        <Image
                            src={agriculture}
                            alt="agriculture" fluid>
                        </Image>
                        Rajguru Nagar
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={agriculture}
                            alt="agriculture" fluid>
                        </Image>Ambegaon
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image
                            src={agriculture}
                            alt="agriculture" fluid>
                        </Image>Junnar
                    </ListGroup.Item>
                </ListGroup>
            </Tab>
        )


    }

    const renderApartmentList = () => {
        return (
            <div>
                <ListGroup>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Hinjewadi</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Wakad</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Baner</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Balewadi</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Ravet</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Sangvi</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Pimple Gurav</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Moshi</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Aundh</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Dhanori</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Lohagaon</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Wagholi</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Keshavnagar</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Hadpasar</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Undri</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Katraj</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Singhgad Road</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Warje</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Bavdhan</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="appartment" fluid>
                    </Image>Chakan</ListGroup.Item>
                    <ListGroup.Item> <Image
                        src={appartment}
                        alt="land" fluid>
                    </Image>Telegaon</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
    return (
        <div className="animate ">
            <div className="project-container mb-5">
                <Badge pill variant="light" className="badge-title mt-5">
                    Projects
                    </Badge>

                <div style={{ width: width - 900 }} className="project-tabs mt-5">
                    <div className="project-btn">
                        <Button
                            onClick={() => {
                                setType('plots');
                            }}

                            variant={type == 'plots' ? "primary" : "outline-primary"} size="md">PLOT'S</Button>
                            &nbsp;
                            <Button onClick={() => {
                            setType('appartments');
                        }}
                            variant={type == 'appartments' ? "primary" : "outline-primary"} size="md">APPARMENT'S</Button>
                    </div>
                    {type == 'plots' ? <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" >
                        {type1()}
                        {type2()}
                        {type3()}
                    </Tabs> :
                        renderApartmentList()}
                </div>
            </div>
            <ProjectStatus />
            <Footer />
        </div >
    )
}

export default Project;