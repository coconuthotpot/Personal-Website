/*
Name: Chen Liu
Date: 2023-03-11
Section: CST 8285-313
Lab: Assignmnet 1
File: search.js
Lab objective: • creating an personal portfolio webpage.
 */

//declare the arrays to keep courses

const courses = [
    {
        image:"images/81166.png",
        title: "Introduction to Computer Programming",
        level: 1,
        code: "CST8116",
        description: "Possessing the fundamentals of logic, problem-solving and programming language structure provides a solid foundation for further study in the field"
    },
    {
        image:"images/8215.png",
        title: "Introduction to Database",
        level: 1,
        code: "CST8215",
        description: "Databases are used to store data and are a core component of many information technology systems."
    },
    {
        image:"images/8101.png",
        title: "Computer Essentials",
        level: 1,
        code: "CST8101",
        description: "The essentials of computer software, hardware, and laptop management form the foundation for building further technical programming skills."
    },
    {
        image:"images/1813.png",
        title: "Communication",
        level: 1,
        code: "ENL1813T",
        description: "Communication remains an essential skill sought by employers, regardless of discipline or field of study."
    },
    {
        image:"images/2355.png",
        title: "Database Systems",
        level: 2,
        code: "CST2355",
        description: "Database systems can automate data processing tasks as well as tie into the security of information technology systems."
    },
    {
        image:"images/8284.png",
        title: "Object Oriented Programming (Java)",
        level: 2,
        code: "CST8284",
        description: "Working in the field of information technology as a programmer requires a firm understanding of Object-Oriented Programming (OOP) concepts. "
    },
    {
        image:"images/8285.png",
        title: "Web Programming",
        level: 2,
        code: "CST8285",
        description: "The World Wide Web (WWW) has become an integrated part of everyday life."
    },
    {
        image:"images/8102.png",
        title: "Operating System Fundamentals (GNU/Linux)",
        level: 2,
        code: "CST8102",
        description: "Operating systems form the backbone of information technology systems coordinating the interaction between hardware and software."
    },
    {
        image:"images/2019.png",
        title: "Technical Communication for Engineering Technologies",
        level: 2,
        code: "ENL2019T",
        description: "The ability to communicate effectively in a technically-oriented interdisciplinary workplace is a foundational skill in an innovation-driven economy."
    },
]

// Get elements from the DOM
const searchInput = document.getElementById("search-input");
const coursesContainer = document.getElementById("courses-container");
const levelFilterDropdown = document.getElementById("level-filter");
const sortDropdown = document.getElementById("sort");

//
function searchCourses() {
  const searchValue = searchInput.value.toLowerCase();
  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchValue));
  displayCourses(filteredCourses);
}

//function to search courses based on the user input
function filterCoursesByLevel() {
  const selectedLevel = levelFilterDropdown.value;
  if (selectedLevel === "all") {
    displayCourses(courses);
  } else {
    const filteredCourses = courses.filter(course => course.level === parseInt(selectedLevel));
    displayCourses(filteredCourses);
  }
}

// function to sort courses by level
function sortCoursesByLevel() {
  const sortValue = sortDropdown.value;
  if (sortValue === "asc") {
    courses.sort((a, b) => a.level - b.level);
  } else if (sortValue === "desc") {
    courses.sort((a, b) => b.level - a.level);
  }
  displayCourses(courses);
}

//this function displays the courses
function displayCourses(coursesToShow) {
  coursesContainer.innerHTML = "";
  coursesToShow.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    courseCard.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h2>${course.title}</h2>
      <p>Level: ${course.level}</p>
      <p> ${course.code}</p>
      <p> ${course.description}</p>
    `;
    coursesContainer.appendChild(courseCard);
  });
}


// display all courses when the page load
displayCourses(courses); 

//call founctions when there is input and change event
searchInput.addEventListener("input", searchCourses);
levelFilterDropdown.addEventListener("change", filterCoursesByLevel);
sortDropdown.addEventListener("change", sortCoursesByLevel);

