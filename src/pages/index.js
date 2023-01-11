import React, { useState } from 'react';

import Layout from '../components/layout';
import SectionAccordion from '../components/section-accordion/section-accordion';
import LogoutAlert from '../components/logout-alert';
import NotifPopup from '../components/notif-popup';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert } from 'react-bootstrap';


const App = () => (
    <>
        <Layout />
        <SectionAccordion />
        <NotifPopup btn_title="Test Modal"></NotifPopup>
        {/* <LogoutAlert /> */}
    </>
);

export default App;
