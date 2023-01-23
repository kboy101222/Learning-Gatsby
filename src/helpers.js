export function getDarkMode() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    console.log(`[getDarkMode] Dark mode is ${darkMode}`);
    if (darkMode === null) {
        localStorage.setItem('darkMode', JSON.stringify(false));
        return false;
    }
    return darkMode == true;
}

export function setDarkMode(darkModeState) {
    localStorage.setItem('darkMode', JSON.stringify(darkModeState));
    console.log(`[setDarkMode] Setting Dark Mode to ${darkModeState}`)
    console.log(`[setDarkMode] Dark mode is ${JSON.parse(localStorage.getItem('darkMode'))}`);
    if (darkModeState) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
}

export function toggleDarkMode() {
    console.log("[toggleDarkMode] helpers.toggleDarkMode");
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    console.log(`[toggleDarkMode] Dark mode is ${darkMode}`);
    // localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
    
    console.log(`[toggleDarkMode] Dark mode is ${JSON.parse(localStorage.getItem('darkMode'))}`);
    // if (darkMode) {
    //     console.log("Set to dark mode");
    //     document.documentElement.setAttribute('data-bs-theme', 'dark');
    // } else {
    //     console.log("Set to light mode");
    //     document.documentElement.setAttribute('data-bs-theme', 'light');
    // }
}