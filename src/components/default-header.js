import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import logo from "../images/gov-logo.png";

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hover: false, darkMode: false };
    }

    componentDidMount() {
        const isDarkMode = localStorage.getItem('darkMode') === true;
        if (isDarkMode) {
            localStorage.setItem('darkMode', true);
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            this.setState({ darkMode: true });
        } else {
            localStorage.setItem('darkMode', false);
            document.documentElement.setAttribute('data-bs-theme', 'light');
            this.setState({ darkMode: false });
        }
    }

    render() {
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
}

export default SiteHeader;