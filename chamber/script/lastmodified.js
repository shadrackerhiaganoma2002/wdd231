const dateObject = new Date;
const getCurrentYEar = document.querySelector("#currentYear").textContent += dateObject.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified ${new Date(document.lastModified).toLocaleDateString()}`
document.querySelector("#currentDate").textContent = `Current Date: ${dateObject.toLocaleDateString()}`;
document.querySelector("#currentTime").textContent = `Current Time: ${dateObject.toLocaleTimeString()}`;