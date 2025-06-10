const greetingMsg = document.getElementById('greeting-msg');
const aDayInMillseconds = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = new Date().getTime();

// Displays the greeting message
function displayGreeting() {
    if(!lastVisit) {
        greetingMsg.textContent = "Welcome! Let us know if you have any questions.";

    } else {
        const timeDiff = currentVisit - parseInt(lastVisit); // the difference is the sum of the days between last and current visit
        const daysDiff = Math.floor(timeDiff / aDayInMillseconds); // How many days difference 

        if (timeDiff < aDayInMillseconds) {
            greetingMsg.textContent = "Back so soon! Awesome!";

        } else {
            const daysText = daysDiff === 1 ? 'day' : 'days';
            greetingMsg.textContent =  `You last visited ${daysDiff} ${daysText}`; 
        }
    }
    // Update last visit date in localStorage
    localStorage.setItem('lastVisit', currentVisit);

    // A timer to display the message for 1 minute
    setTimeout(() => {
        greetingMsg.classList.add('hidden');

    }, 10000)
}

displayGreeting();



// Fetching and displaying activities in Abuja
async function abujaActivities() {

    const tryData = document.querySelector('.tryData');

    try {
        const response = await fetch('data/places.json');
        
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const data = await response.json()
    
        data.places.forEach(item => {
            const container = document.createElement('div')
            container.classList.add('activity')

            container.innerHTML = `
                <img src="images/places/${item.image_url}" alt="${item.name}" loading="lazy">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <address>${item.address}</address>
                <p>${item.cost}</p>
                <button type="submit">Learn more!</button>
            `
            tryData.appendChild(container)
        }) 
    }
    catch (error) {
        console.error('Error fetching data:', error)
    }
}

abujaActivities()


// Calendar functionality
const monthYearElement = document.getElementById('month-year');
const daysElement = document.getElementById('days');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month')
let currentDate = new Date();

function renderCalendar() {
    // Clear previous calendar
    daysElement.innerHTML = '';

    // Set month and year in header
    const options = { month: 'long', year: 'numeric' };
    monthYearElement.textContent = currentDate.toLocaleDateString('en-US', options);

    // Get first and last day of the month
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Populate days
    for (let i = 0; i < firstDay; i++) {
        daysElement.innerHTML += `<div></div>`; // Blank spaces before first day
    }

    for (let i = 1; i <= lastDate; i++) {
        const dayElement = document.createElement('div');
        
        dayElement.textContent = i;
        if (i === new Date().getDate() && 
            currentDate.getMonth() === new Date().getMonth() && 
            currentDate.getFullYear() === new Date().getFullYear()) {
            dayElement.classList.add('today'); // Highlight current day
        }
        daysElement.appendChild(dayElement);
    }
}

// Previous or next month navigation
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();