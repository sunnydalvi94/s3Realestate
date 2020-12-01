import React from 'react';
import { height } from '../../assets/globals/contant';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Gallery from 'react-photo-gallery';
import G1 from '../../assets/images/gallary/g1.png';
import G2 from '../../assets/images/gallary/g2.png';
import G3 from '../../assets/images/gallary/g3.png';
import G4 from '../../assets/images/gallary/g4.png';
import G5 from '../../assets/images/gallary/g5.png';
import Footer from '../footer/Footer';

const photos = [
    {
        src: G3,
        width: 9,
        height: 6
    },
    {
        src: G2,
        width: 1,
        height: 1
    },
    {
        src: G1,
        width: 1,
        height: 1
    },
    {
        src: G4,
        width: 1,
        height: 1
    },
    {
        src: G5,
        width: 1,
        height: 1
    }
];



function Gallary(props) {
    return (
        <div className="animate">
            <div className="gallary-container">
                <Form.Label className="mt-5">
                    <Badge pill variant="light" className="badge-title">
                        Gallary
                    </Badge>
                </Form.Label>
                <div className="form-wrapper mt-5">
                    <h4>
                        Company Information
                    </h4>
                    <p>
                        5 Images
                    </p>
                    <Gallery photos={photos} />
                </div>
                <div className="form-wrapper mt-5">
                    <h4>
                        Event
                    </h4>
                    <p>
                        0 Item
                    </p>
                    <div>
                        Coming Soon
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallary;