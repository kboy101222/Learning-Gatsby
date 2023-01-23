import React, { useEffect, useState } from 'react';
import { Alert, Button, ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';
import * as helper from "../helpers";

class ThemeSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { darkMode: false, isDarkMode: false };
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.setDarkMode = this.setDarkMode.bind(this);
    }

    toggleDarkMode() {
        console.log("bottom-alert.toggleDarkMode");
        helper.toggleDarkMode();
        this.setState({ darkMode: !this.state.darkMode });
    }

    setDarkMode(darkModeState) {
        this.setState({ darkMode: darkModeState });
        helper.setDarkMode(darkModeState);
        // this.state.darkMode
        //     ? document.documentElement.setAttribute('data-bs-theme', 'dark')
        //     : document.documentElement.setAttribute('data-bs-theme', 'light')

        // localStorage.setItem('darkMode', this.state.darkMode);
    }

    componentDidMount() {
        // const isDarkMode = helper.getDarkMode();
        // if (isDarkMode) {
        //     localStorage.setItem('darkMode', true);
        //     this.setDarkMode(true);
        // } else {
        //     localStorage.setItem('darkMode', false);
        //     this.setDarkMode(false);
        // }
    }


    render() {
        if (helper.getDarkMode()) {
            this.state.darkMode = true;
        } else {
            this.state.darkMode = false;
        }
        return (
            <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant={
                    this.state.darkMode
                        ? "light"
                        : "dark"
                }
                checked={this.state.darkMode}
                value="1"
                onChange={(e) => this.toggleDarkMode()}
                className="float-right"
            >
                {this.state.darkMode
                    ? "Light Mode"
                    : "Dark Mode"
                }
            </ToggleButton>
        )
    }
}

const BottomAlert = () => {
    const [show, setShow] = useState(true);

    return (
        <Alert variant="secondary" onClose={() => setShow(false)} className='fixed-bottom mb-0'>
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