import React from 'react';
// import Navbar from "../components/Navbar";
import Header from "../components/Header.jsx"
import './stylesheets/About.css';
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Header />
            <h1 className="browse-about-me-text">Browse the "About Me" page:</h1>
            
            <div className="about-container">
            <div className="image-container">
            <img src="../assets/3d-illustration-cute-cartoon-girl-with-red-backpack.jpg" alt="About Alyssa" className="about-image" />
            </div>

            <div className="about-text">
            <h2 className="meet-alyssa-text">Meet Alyssa, the dev behind it all!</h2>
            {/* <h2 className="meet-alyssa-text">Meet Alyssa,the dev behind it all!</h2> */}
            </div>
            </div>

            <div className="about-text">
            <p className="about-me-paragraph">
            Hi! I'm Alyssa, a passionate and driven full-stack software developer! My love for coding can certainly be credited to my Dad, who has worked in IT since I was little. Some of my earliest tech-related memories are of late-night trips to data centers with my dad while he was on call. I was always mesmerized by the hum of the machines, the glow of flashing lights, and the sheer complexity of it all. At the time, I thought I was “too cool” to follow in his footsteps, but as I grew older, I struggled to find a career path that truly excited me.
            </p>
            <p className="about-me-paragraph">
                For years, I searched for something that would challenge me, inspire me, and push me to grow. Nothing quite felt right—until I revisited the idea of software development. With the support of my family and friends, I decided to take the leap, and I quickly fell in love with the process of coding. There's something incredibly rewarding about breaking down a complex problem, crafting a solution, and seeing it come to life.
            </p>
            <p className="about-me-paragraph">
                Now, as a developer, I am constantly learning and evolving. I thrive on solving problems, embracing new challenges, and building meaningful projects that combine creativity and logic. I am hardworking, curious, and always eager to expand my skills. Whether it’s mastering new technologies, collaborating with others, or pushing the boundaries of what I can create, I’m committed to becoming the best developer I can be.
            </p>

            </div>
            <Footer />
        </div>
    );
};

export default About;