import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import { FaPlay } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './stylesheets/Navbar.css'
import aboutVideo from "/assets/About-Video.mp4";
import portfolioVideo from "/assets/Portfolio-Video-2.mp4";
// import resumeVideo from "/assets/Portfolio-Video-2.mp4"

import "../components/stylesheets/Header.css";

// sets the title, description, and video for each page
const pageDetails = {
'/about' : {
    title: 'About Me',
    description: 'In a world driven by innovation, Alyssa Dailey stands at the crossroads of creativity and technology. On this page, dive into her journey—how a childhood spent in data centers with her IT-savvy dad sparked a lifelong passion for software development. Discover what fuels her relentless drive to master her craft, the challenges she’s conquered along the way, and the vision that pushes her forward. But coding isn’t her only passion—when she’s not crafting sleek applications, she’s embracing the moments that inspire her most. Whether it’s problem-solving, building meaningful projects, or finding new ways to bring ideas to life, this is your chance to get to know the developer behind the screen.',
    video: aboutVideo,
},
'/portfolio' : {
    title: 'Portfolio',
    description: 'Step into a world of problem-solving, creativity, and cutting-edge code. This is more than just a collection of projects—it’s a showcase of passion, perseverance, and the skills that bring ideas to life. From dynamic web applications to immersive experiences, each project tells a story of growth, challenges overcome, and the drive to build something meaningful. Whether you\'re here to explore technical expertise, seek inspiration, or find the right developer for your next big idea, this portfolio is your front-row seat to the work that defines Alyssa Dailey.',
    video: portfolioVideo,
},
};

// uses the location to determine which page to display
const Header = ({ userType }) => {

    const location = useLocation();

    const currentPageDetails = pageDetails[location.pathname] || pageDetails["/about"];
    

    return (
        <header className="header">

            {/* displays dynamic videos */}
            <video autoPlay loop muted className="background-video">
                <source src={currentPageDetails.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Navbar */}
            <Navbar userType={userType} />

            {/* Header Content */}
            <div className="header-content">
                <h1 className="header-title">{currentPageDetails.title}</h1>
                <h2 className="page-title">The Alyssa Show</h2>
                <p className="page-description">{currentPageDetails.description}</p>

            {/* Resume and linked in Buttons */}
                <div className="header-buttons">
                    <a href="/assets/Alyssa-SWD-Resume.pdf" download="Alyssa_Dailey_Resume" className="resume-btn">
                        <FaPlay className="play-icon"/> Resume
                    </a>
                    <a href="https://www.linkedin.com/in/alyssa-dailey/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                        <FaLinkedin className="linkedin-icon" /> LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;