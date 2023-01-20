import React from 'react';
import {Card, CardGroup, ListGroup} from 'react-bootstrap';

class QuickAccessCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Quick Access</Card.Title>
                    <Card.Subtitle>
                        A set of links to quickly find common pages.
                    </Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item action>Hello, World!</ListGroup.Item>
                        <ListGroup.Item action>Hello, World!</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        )
    }
}

export default QuickAccessCard;