import React, { useEffect, useState } from 'react';
import { Alert, Button, ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        darkMode
            ? document.documentElement.setAttribute('data-bs-theme', 'dark')
            : document.documentElement.removeAttribute('data-bs-theme')
    }, [darkMode]);

    return (
        // <ButtonGroup className="mb-2">
        <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant={
                darkMode
                    ? "light"
                    : "dark"
            }
            checked={darkMode}
            value="1"
            onChange={(e) => setDarkMode(e.currentTarget.checked)}
            className="float-right"
        >
            {darkMode
                ? "Light Mode"
                : "Dark Mode"
            }
        </ToggleButton>
        // </ButtonGroup>
    )
}

const BottomAlert = () => {
    const [show, setShow] = useState(true);

    return (
        <Alert variant="secondary" onClose={() => setShow(false)} className='position-absolute bottom-0 start-0 end-0 m-0'>
            <Stack direction="horizontal" gap={2}>
                <p className='float-left'>
                    Web Self Service is a separate system from OneStop. Please logout by pressing the 'EXIT' button when you are finished. When using a public computer, you should always close your web browser entirely when finished.
                </p>
                <ThemeSwitch />
            </Stack>
        </Alert>
    );
}

export default BottomAlert;