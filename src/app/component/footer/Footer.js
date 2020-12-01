import facebook from '../../assets/images/social/facebook.svg';
import twitter from '../../assets/images/social/twitter.svg';
import linkedin from '../../assets/images/social/linkedin.svg';
import { copyRight, followUs } from '../../assets/globals/contant';
import Button from 'react-bootstrap/Button'
import { height, width } from '../../assets/globals/contant';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <div className="icon-wrapper">
                    <a href="https://www.facebook.com/Satyam-Shivam-Sundaram-101811001775207" className="icon-margin">
                        <Button size="sm" variant="outline-primary"><img className="logo-items" src={facebook} alt="" /><span className="social-text">Facebook</span></Button>
                    </a>
                    <a href="https://twitter.com/?lang=en" className="icon-margin">
                        <Button size="sm" variant="outline-info"><img className="logo-items" src={twitter} alt="" /><span className="social-text">Twitter</span></Button>
                    </a>
                    <a href="https://www.linkedin.com/" className="icon-margin">
                        <Button size="sm" variant="outline-warning"><img className="logo-items" src={linkedin} alt="" /><span className="social-text">Linkedin</span></Button>
                    </a>
                </div>
            </div>
            <div className="copy-right">
                    {copyRight}
                </div>
        </div>
    )
}

export default Footer;

