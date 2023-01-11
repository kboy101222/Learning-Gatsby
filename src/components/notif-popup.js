import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

// function NotifPopup({props, btn_title, title, body}) {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Button variant="" onClick={handleShow}>
//                 {btn_title}
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>{body}</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

class NotifPopup extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: false, show: false, setShow: false };
        this.toggleHover = this.toggleHover.bind(this);
        this.setShow = this.setShow.bind(this);
        // const [show, setShow] = useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
    }

    setShow() {
        this.setState({ show: !this.state.show });
        console.log("Toggled Modal");
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover });
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
            linkStyle = {
                background: 'white',
                color: 'black',
                transistion: 'background 1s ease'
            };
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