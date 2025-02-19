import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/Projects";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './stylesheets/Portfolio.css';

// Creates projects object, that contains all info for each project that will be displayed on cards
const projects = [
    {
        image: "../assets/Your-Recipe-Box-img.png",
        title: "Your-Recipe-Box",
        description: "This digital recipe box application is an easy-to-use web app built with JavaScript, Bootstrap, and other web technologies, allowing users to store their favorite recipes digitally. The app offers a paperless solution to recipe storage, providing a clean and responsive user interface with Bootstrap while utilizing JavaScript for functionality and interactivity.",
        liveLink: "https://smoenter.github.io/Project-1/",
        githubLink: "https://github.com/smoenter/Project-1"
    },
    {
        image: "../assets/Build-Your-Ride-img.png",
        title: "Build-Your-Ride",
        description: "This application lets users create a new vehicle or choose from saved ones, then perform different actions based on the vehicle's capabilities. Trucks can check if they can tow another vehicle and complete the action if allowed. Built with a class-based structure, the app ensures reusability, maintainability, and accurate real-time feedback.",
        liveLink: "https://app.screencastify.com/v3/watch/nIoKANrJ2Y4QXmiHWhlc",
        githubLink: "https://github.com/alyssadailey/Build-Your-Ride"
    },
    {
        image: "../assets/README-O-MATIC-img.png",
        title: "README-O-MATIC",
        description: "README-O-MATIC is a Node.js application that guides users through a series of prompts about their project and automatically generates a well-structured, personalized README based on their responses. Built with JavaScript, it streamlines the documentation process, ensuring clarity and consistency for any project.",
        liveLink: "https://app.screencastify.com/v3/watch/WDT5ScFNWmW05fu5hHPb",
        githubLink: " https://github.com/alyssadailey/READMEO-MATIC"
    },
    {
        image: "../assets/Talent-Tracker-img.png",
        title: "Talent-Tracker",
        description: "This Node.js application uses MySQL and Inquirer to manage your companies data on current employees, roles, and departments. It enables users to view, add, and update records through interactive prompts, ensuring efficient data management with a class-based structure.",
        liveLink: "",
        githubLink: "https://github.com/alyssadailey/Talent-Tracker"
    },
    {
        image: "../assets/Prework-Study-Guide-img.png",
        title: "Prework-Study-Guide",
        description: "This was my very first page I ever coded! An application to help bootcamp students navigate, understand and study the four essential elements of front-end web development—Git, HTML, CSS, and JavaScript. Although not the prettiest of pages, it will always hold a special place in my heart, because this is where my journey started!", 
        liveLink: "file:///C:/Users/Alyss/bootcamp/prework-study-guide/index.html",
        githubLink: "https://github.com/alyssadailey/prework-study-guide"
    },
    {
        image: "../assets/Build-Your-Ride-img.png",
        title: "Weather-Buddy",
        description: "Ipsum Lorium Ipsum Lorium",
        liveLink: "https://app.screencastify.com/v3/watch/nIoKANrJ2Y4QXmiHWhlc",
        githubLink: "https://github.com/alyssadailey/Build-Your-Ride"
    },
];
// creates a chunk of projects to be displayed in the carousel at a time
const chunkProjects = (projects, chunkSize) => {
    let chunks = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
        chunks.push(projects.slice(i, i + chunkSize));
    }
    return chunks;
};

const Portfolio = () => {
    const projectChunks = chunkProjects(projects, 3);
    return (
        <div className="portfolio-container">

            <Header />
            <h1 className="browse-my-proj-txt">We think you will love these projects:</h1>

            <Carousel interval={null}> {/* Disables auto-swiping */}
                {projectChunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div className="carousel-projects">
                            {chunk.map((project, idx) => (
                                <ProjectCard key={idx} {...project} />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Footer />

        </div>
    );
};

export default Portfolio;