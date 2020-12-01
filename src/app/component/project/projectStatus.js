import React, { useState } from 'react';
import { width } from '../../assets/globals/contant';
import Image from 'react-bootstrap/Image';
import { ListGroup, Tabs, Tab, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import house from '../../assets/images/projects/house.svg';



const ProjectStatus = () => {
    const [status, setStatus] = useState('upcoming');

    const status1 = () => {
        return (

            <Tab eventKey="upcoming" title="Upcoming">
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
    const status2 = () => {
        return (

            <Tab eventKey="ongoing" title="Ongoing">
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
    const status3 = () => {
        return (

            <Tab eventKey="completed" title="Completed">
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
    return (
        <div >
            <div className="project-container mb-5" >
                <Badge pill variant="light" className="badge-title">
                    Projects Status
                    </Badge>

                <div style={{ width: width - 900 }} className="project-tabs mt-5">
                    <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example" >
                        {status1()}
                        {status2()}
                        {status3()}
                    </Tabs>
                </div>
            </div>
        </div >
    )
}

export default ProjectStatus;