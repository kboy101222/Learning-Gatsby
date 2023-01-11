import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const LogoutAlert = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible className='position-absolute bottom-0 start-0 end-0 m-0'>
                <p>
                Web Self Service is a separate system from OneStop. Please logout by pressing the 'EXIT' button when you are finished. When using a public computer, you should always close your web browser entirely when finished.
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)} className='position-absolute bottom-0 start-0 end-0 m-0'>Show Alert</Button>;
}

export default LogoutAlert;