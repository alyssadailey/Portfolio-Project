import React from "react";

import "../components/stylesheets/Projects.css";


// The project cards that will be displayed on the portfolio page
const ProjectCard = ({ image, title, description, liveLink, githubLink }) => {
  return (
    <div className="card project-card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="button-group">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Live Site
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;