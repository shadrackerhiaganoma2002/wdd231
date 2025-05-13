const courses = [
    { name: 'WDD 101', completed: true, credits: 3 },
    { name: 'CSE 101', completed: false, credits: 4 },
    { name: 'WDD 102', completed: true, credits: 3 },
    { name: 'CSE 102', completed: false, credits: 3 }
];

const courseContainer = document.getElementById('certificate');

function displayCourses(courses) {
    courseContainer.innerHTML = '';
    let totalCredits = 0;
    totalCredits += course.credits; // Adds only filtered courses

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course');
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;

        if (course.completed) {
            courseCard.style.backgroundColor = '#d4edda'; // Green for completed
        } else {
            courseCard.style.backgroundColor = '#f8d7da'; // Red for not completed
        }

        courseContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    // Display total credits
    const totalCreditsEl = document.createElement('p');
    totalCreditsEl.textContent = `Total Credits: ${totalCredits}`;
    courseContainer.appendChild(totalCreditsEl);
}

// Filter courses by category
function filterCourses(category) {
    let filteredCourses = courses;
    if (category === 'WDD')
 {
        filteredCourses = courses.filter(course => course.name.startsWith('WDD'));
    } else if (category === 'CSE') {
        filteredCourses = courses.filter(course => course.name.startsWith('CSE'));
    }
    displayCourses(filteredCourses);
}

document.getElementById('allCourses').addEventListener('click', () => displayCourses(courses));
document.getElementById('wddCourses').addEventListener('click', () => filterCourses('WDD'));
document.getElementById('cseCourses').addEventListener('click', () => filterCourses('CSE'));

// Fixing issues in the code

// Correcting the misplaced totalCredits increment in displayCourses
function displayCourses(courses) {
    courseContainer.innerHTML = '';
    let totalCredits = 0;

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course');
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;

        if (course.completed) {
            courseCard.style.backgroundColor = '#d4edda'; // Green for completed
        } else {
            courseCard.style.backgroundColor = '#f8d7da'; // Red for not completed
        }

        courseContainer.appendChild(courseCard);
        totalCredits += course.credits; // Correctly adding credits here
    });

    // Display total credits
    const totalCreditsEl = document.createElement('p');
    totalCreditsEl.textContent = `Total Credits: ${totalCredits}`;
    courseContainer.appendChild(totalCreditsEl);
}

// Fixing syntax error in filterCourses
function filterCourses(category) {
    let filteredCourses = courses;
    if (category === 'WDD') {
        filteredCourses = courses.filter(course => course.name.startsWith('WDD'));
    } else if (category === 'CSE') {
        filteredCourses = courses.filter(course => course.name.startsWith('CSE'));
    }
    displayCourses(filteredCourses);
}

// Ensure the program initializes correctly
document.getElementById('allCourses').addEventListener('click', () => displayCourses(courses));
document.getElementById('wddCourses').addEventListener('click', () => filterCourses('WDD'));
document.getElementById('cseCourses').addEventListener('click', () => filterCourses('CSE'));

// Initial display of all courses
displayCourses(courses);
