
const menu = document.querySelector("#menu").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "block";
});

const hideMenu = document.querySelector(".close-menu").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = "none";
});


const dateObject = new Date();
const currentYear = document.querySelector("#currentYear").textContent += dateObject.getFullYear();


document.querySelector("#lastModified").textContent = 
    `Last Modified ${new Date(document.lastModified).toLocaleDateString()}`






 






