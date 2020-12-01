import React from 'react';
import { width } from '../../assets/globals/contant';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import headerLogo from '../../assets/images/headerLogo.png';

class Header extends React.Component {

    toggle = () => {
        const button = document.getElementsByClassName("navbar-toggler-icon")[0];
        if (button && width < 987) {
            // alert("hi")
            button.click();
        }
    }

    render() {
        return (
            <div className="header-container">
                <div className="row">
                    <div className="col-md-12" style={{padding:'0px'}}>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="/">
                                <Image
                                    className="header-logo"
                                    src={headerLogo}
                                    alt="Company Logo">
                                </Image>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                <Nav className="mr-auto" onClick={() => this.toggle()}>
                                    <NavLink exact to="/" activeClassName="active" className="link-label">Home</NavLink>
                                    <NavLink to="/about" activeClassName="active" className="link-label">About</NavLink>
                                    <NavLink to="/projects" activeClassName="active" className="link-label">Projects</NavLink>
                                    <NavLink to="/services" activeClassName="active" className="link-label">Our Services</NavLink>
                                    <NavLink to="/enquiry" activeClassName="active" className="link-label">Enquiry</NavLink>
                                    <NavLink to="/gallary" activeClassName="active" className="link-label">Gallary</NavLink>
                                    <NavLink to="/careers" activeClassName="active" className="link-label">Careers</NavLink>
                                    <NavLink to="/contact" activeClassName="active" className="link-label">Contact Us</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
