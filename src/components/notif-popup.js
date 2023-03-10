import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class NotifPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: false, show: false, setShow: false, darkMode: false };
        this.toggleHover = this.toggleHover.bind(this);
        this.setShow = this.setShow.bind(this);
    }

    setShow() {
        this.setState({ show: !this.state.show });
        console.log("Toggled Modal");
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var rootNode = document.documentElement;
        if (rootNode.getAttribute('data-bs-theme') === 'dark') {
            this.setState({darkMode: true});
        } else {
            this.setState({darkMode: false});
        }
    }

    render() {
        var linkStyle;
        if (this.state.hover) {
            linkStyle = {
                background: '#C41E3A',
                color: 'white',
                transistion: 'background 1s ease'
            };
        } else {
            if (this.state.darkMode) {
                linkStyle = {
                    color: 'white'
                };
            } else {
                linkStyle = {
                    color: 'black',
                    background: 'white'
                };
            }
        }
        return (
            <>
                <Button variant="" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.setShow} className="text-start">
                    <p>{this.props.btn_title}</p>
                    <p className="text-muted">{this.props.btn_body}</p>
                </Button>

                <Modal show={this.state.show} onHide={this.setShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.children}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.setShow}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
};

export default NotifPopup;