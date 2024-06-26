let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dkModeToggle');
console.log(darkMode);

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", "disabled");
}

if (darkMode === "enabled"){
    enableDarkMode();
};

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled"){
        disableDarkMode();
        console.log(darkMode);
    } else {
        enableDarkMode();
        console.log(darkMode);
    }
});