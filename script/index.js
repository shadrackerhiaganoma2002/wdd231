document.addEventListener("DOMContentLoaded", () => {
    // Example: Add a click event to a button
    const button = document.querySelector("#myButton");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }

    // For handling the hamburger menu or toggle on small screens, you can implement a simple JS
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


    // Example: Toggle a class on an element
    const toggleElement = document.querySelector("#toggleElement");
    if (toggleElement) {
        toggleElement.addEventListener("click", () => {
            toggleElement.classList.toggle("active");
        });
    }

    // Example: Update text content dynamically
    const textElement = document.querySelector("#textElement");
    if (textElement) {
        textElement.textContent = "This text was updated by JavaScript!";
    }
});