import React, { useState } from 'react';

import SiteHeader from '../components/default-header';
import SectionAccordion from '../components/section-accordion/section-accordion';
import BottomAlert from '../components/bottom-alert';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert } from 'react-bootstrap';


const App = () => (
    <>
        <SiteHeader />
        <SectionAccordion />
        <BottomAlert />
    </>
);

export default App;
