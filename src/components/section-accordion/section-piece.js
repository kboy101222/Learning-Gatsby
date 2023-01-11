import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class SectionPiece extends Component {
    constructor(props) {
        super(props);
        this.state = {hover: false};
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover});
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
            <Button variant="" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="text-start">
                <p>{this.props.title}</p>
                <p className="text-muted">{this.props.description}</p>
            </Button>
        )
    }
};

// const SectionPiece = ({ title, description, link }) => {
//     return (
//         <a>
//             <p>{title}</p>
//             <p className="form-text">{description}</p>
//         </a>
//     );
// }

export default SectionPiece;