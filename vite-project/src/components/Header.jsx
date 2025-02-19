import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import { FaPlay } from 'react-icons/fa';
import './stylesheets/Navbar.css'
import aboutVideo from "/assets/About-Video.mp4";
import portfolioVideo from "/assets/Portfolio-Video-4.mp4";
import resumeVideo from "/assets/Portfolio-Video-2.mp4"

import "../components/stylesheets/Header.css";

const pageDetails = {
'/about' : {
    title: 'About Me',
    description: 'On this page, you will get to know me! Learn why I chose software-development, what pushes me to be the best developer I possibly can be, and what I enjoy to do in my free time.',
    video: aboutVideo,
},
'/portfolio' : {
    title: 'Portfolio',
    description: 'Browse my projects here',
    video: portfolioVideo,
},
'/resume' : {
    title: 'Resume',
    description: 'Browse my resume and skills here',
    video: resumeVideo,
},
};

const Header = ({ userType }) => {

    const location = useLocation();
    const { title, description, video } = pageDetails[location.pathname] || {
        title: "Welcome",
        description: "Explore my page",
        video: aboutVideo,
    };

    return (
        <header className="header">

            {/* displays dynamic videos */}
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Navbar */}
            <Navbar userType={userType} />

            {/* Header Content */}
            <div className="header-content">
                <h1 className="header-title">The Alyssa Show</h1>
                <h2 className="page-title">{title}</h2>
                <p className="page-description">{description}</p>

            {/* Button */}
                <div className="header-buttons">
                    <a href="/assets/Alyssa-SWD-Resume.pdf" download="Alyssa_Dailey_Resume" className="resume-btn">
                        <FaPlay className="play-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/alyssa-dailey/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                        <FaPlay className="linkedin-icon"/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;