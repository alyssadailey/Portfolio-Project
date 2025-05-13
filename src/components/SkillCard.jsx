// import React from "react";
import { FaDatabase, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNpm } from "react-icons/fa";

import "../components/stylesheets/SkillCard.css";


const iconMap= {
  "SQL (PostgreSQL)": <FaDatabase />,
  "MySQL": <FaDatabase />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  "Vite": <FaNpm />,
  "Git & GitHub": <FaGitAlt />,
  "HTML5 & CSS3": <FaHtml5 />,
  "JavaScript & TypeScript": <FaJs />,
  "React": <FaReact />,
  "Bootstrap": <FaCss3Alt />,
  "RESTful APIs": <FaNodeJs />,
  "NPM": <FaNpm />,
};

// maps the skills to the skill card with icon
const SkillCard = ({ skill, Icon }) => {
    return (
        <div className="skill-card">
        {Icon && <Icon className="skill-icon" />}
          <p className="skill-name">{skill}</p>
        </div>
      );
    };

export default SkillCard;