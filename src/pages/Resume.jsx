// import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import SkillCard from "../components/SkillCard";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiExpress, SiPostgresql, SiMysql, SiVite, SiNpm } from "react-icons/si";
import './stylesheets/Resume.css';

// sets the skills into categories and sets the name and icon value of each skill
const skills = {

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
      {/* displays navbar */}
      <Navbar />
      {/* Resume section */}
      <div className="resume-section">
        <div>
          <h2 className="resume-text">Resume</h2>

          <p className="click-btn-text">Click to download my resume:</p>
          {/* Download Resume button */}
          <a
            href="/assets/Alyssa-Resume.pdf"
            download="Alyssa_Dailey_Resume"
            class="animated-button1">
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
          {/* Loop through skill categories- using data-driven rendering*/}
          {Object.entries(skills).map(([category, skillList]) => (

            // Loop through each skill category
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              {/* displays each skill name and icon by mapping through the skillList */}
              <div className="skills-container">
                {skillList.map(({ name, icon }, index) => (
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