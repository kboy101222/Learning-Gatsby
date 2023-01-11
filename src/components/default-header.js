import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import logo from "../images/gov-logo.png";

const SiteHeader = () => {
    return (
        <Navbar bg="dark" expand="lg" className="p-0">
            <Container fluid className="p-0">
                <Navbar.Brand href="#home" className="p-0 align-text-bottom">
                    <Image src={logo} alt="" fluid className="float-start max-h-24" />                    
                </Navbar.Brand>
                <h1 className="m-2 text-white">APSU Web Self Service</h1>
            </Container>
        </Navbar>
    );
}

export default SiteHeader;