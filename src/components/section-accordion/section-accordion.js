import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

import SectionPiece from './section-piece';
import NotifPopup from '../notif-popup';

const SectionAccordion = () => {
    return (
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Personal Information</Accordion.Header>
                <Accordion.Body>
                    <Stack>
                        <SectionPiece title='Personal Information' description='View your personal information, such as your name and address' />
                        <SectionPiece title='Emergency Contacts' description='View your emergency contacts' />
                        <NotifPopup btn_title="View Your PoBox and Campus Address" title="PO Box and Campus Address">
                            <p>You do not currently have a PO Box Assigned</p>
                            <p>If you believe this is incorrect, please contact the Campus Post Office</p>
                        </NotifPopup>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Student Information</Accordion.Header>
                <Accordion.Body>
                    <Stack>
                        <SectionPiece title='Apply for Admissions' description='Start a new admissions application or view the status of an existing application' />
                        <SectionPiece title='Registration Information' description='View your registration information, such as your Course Choice Counts information and VA Certification Requests' />
                        <SectionPiece title='Readiness Checklist' description='View your readiness checklist to ensure you are ready to register for classes' />
                        <SectionPiece title='Class Schedule' description='View your class schedule' />
                        <SectionPiece title='Grades & GPA' description='View your grades' />
                        <SectionPiece title='Student Records' description='View your student records, such as your enrollment verification' />
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Financial Aid</Accordion.Header>
                <Accordion.Body>
                    <Stack>
                        <SectionPiece title='Financial Aid Status' description='View your financial holds' />
                        <SectionPiece title='Eligibility' description='View your eligibility for financial aid' />
                        <SectionPiece title='Financial Aid Awards' description='View your financial aid awards' />
                        <SectionPiece title='Financial Aid Links' description='View links to financial aid forms and other financial aid information' />
                        <SectionPiece title='Upload Financial Aid Documents' description='Upload documents requested by the Office of Financial Aid' />
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Veterans' Affairs</Accordion.Header>
                <Accordion.Body>
                    <Stack>
                        <SectionPiece title='VA Certification Requests' description='View your VA Certification Requests' />
                        <SectionPiece title='VA Fee Deferment Request' description='Request a VA Fee Deferment' />
                        <SectionPiece title='Missing Documents' description='View any missing documents' />
                        <SectionPiece title='Upload Documents' description='Upload documents requested by the Office of Veterans' />
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default SectionAccordion;