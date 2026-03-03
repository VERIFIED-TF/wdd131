// Populate current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Populate last modified date
const lastMod = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastMod}`;