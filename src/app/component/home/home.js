
import React from 'react';
import { height, width } from '../../assets/globals/contant';
import Image from 'react-bootstrap/Image';
import { Carousel } from 'react-bootstrap';
import Footer from '../footer/Footer';

import slide1 from '../../assets/images/home-sliders/slide1.png';
import slide2 from '../../assets/images/home-sliders/slide2.png';
import slide3 from '../../assets/images/home-sliders/slide3.png';
import slide4 from '../../assets/images/home-sliders/slide4.png';
import Background from '../../assets/images/home-sliders/S3BG.png';
import mission from '../../assets/images/home-sliders/mission.png';
import sss3Logo from '../../assets/images/sss3background.png';

const bgImg = {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const setCarouselWidth = width < 600 ? '70%' : width / 3

const Home = () => {

    return (
        <div className="animate" style={{ backgroundImage: `url(${Background})`, ...bgImg }}>
            <div className="home-container" style={{ height: height }} >
                <div className="mt-4 fade-in">
                    <Image
                        style={{ height: '60px', width: width / 1.5 }}
                        src={mission}
                        alt="First slide" fluid>
                    </Image>
                </div>
                <div className="slider-area mt-4" style={{ width: setCarouselWidth }}>
                    <Carousel touch={false} fade={true}>
                        <Carousel.Item interval={3000} >
                            <div>
                                <Image
                                    style={{ height: height - 400 }}
                                    src={sss3Logo}
                                    alt="First slide" fluid>
                                </Image>
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div>
                                <Image
                                    style={{ height: height - 400 }}
                                    src={slide1}
                                    alt="First slide" fluid>
                                </Image>
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div>
                                <Image
                                    style={{ height: height - 400 }}
                                    src={slide2}
                                    alt="First slide" fluid>
                                </Image>
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div>
                                <Image
                                    style={{ height: height - 400 }}
                                    src={slide3}
                                    alt="First slide" fluid>
                                </Image>
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <div>
                                <Image
                                    style={{ height: height - 400 }}
                                    src={slide4}
                                    alt="First slide" fluid>
                                </Image>
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;