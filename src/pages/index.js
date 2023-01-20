import React from 'react';

import SiteHeader from '../components/default-header';
import SectionAccordion from '../components/section-accordion/section-accordion';
import BottomAlert from '../components/bottom-alert';

import * as helper from '../helpers'

import { CardGroup, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <>
            <SiteHeader />
            <CardGroup>
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
            </CardGroup>
            <SectionAccordion />
            <BottomAlert />
        </>
        );
    }
}

export default App;
