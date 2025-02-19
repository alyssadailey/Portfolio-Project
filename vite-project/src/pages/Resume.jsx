import React from 'react';
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiExpress, SiPostgresql, SiMysql, SiVite, SiNpm } from "react-icons/si";
import './stylesheets/Resume.css';

const skills = {
    // allows icons
  "Front-End Development:": [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Bootstrap", icon: FaBootstrap },
  ],
  "Back-End Development:": [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "RESTful APIs", icon: FaNodeJs },
  ],
  "Databases:": [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
  ],
  "Tools & Technologies:": [
    { name: "Vite", icon: SiVite },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "NPM", icon: SiNpm },
  ],

};

const Resume = () => {
    return (
        <div>
            {/* displays header and navbar */}
            <Header />
            {/* <Header /> */}
            {/* Resume button section */}
            <div className="resume-section">
            <div>
            <h2 className="resume-text">Resume</h2>
            <p className="click-btn-text">Click to download my resume:</p>
            <a 
            href= "/assets/Alyssa-SWD-Resume.pdf"
            download= "Alyssa_Dailey_Resume"
            class="animated-button1">
            {/* className= "btn btn-primary"> */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Download Resume
            </a>
            </div>
            {/* Skills card section */}
            <div className="full-skills-container">
            <h2 className="skills-text">Skills</h2>
            {/* Loop through skill categories */}
            {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-container">
              {skillList.map(({name, icon}, index) => (
                <SkillCard key={index} skill={name} Icon={icon} />
              ))}
            </div>
          </div>
        ))}
        </div>
        </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Resume;