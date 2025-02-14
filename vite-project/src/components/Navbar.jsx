import React from "react";
import { Link } from "react-router-dom";
import "../components/stylesheets/Navbar.css";

const userIcons = {
  Employer: "/assets/Teal-NF-Icon.png",
  Developer: "/assets/Pink-NF-Icon.png",
  Friend: "/assets/Blue-NF-Icon.png",
  Stranger: "/assets/Plumb-NF-Icon.png",
  default: "/assets/Default-img.webp",
};

const Navbar = ({ userType = "default" }) => {

    const userIcon = userIcons[userType] || userIcons.default; // Select correct icon

    return (
      <nav className="nav">
          <Link to="/" className="logo">
                Alyssa Dailey
            </Link>
        <div className="nav-links">
            {/* <Link className="nav-link" to="/dashboard/${userType}">Home</Link> */}
            <Link className="nav-link" to="/about">About me</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/resume">Resume</Link>
            <Link className="nav-link" to="/contact">Contact me</Link>
        </div>
        <h2 className="welcome-msg-nav">Welcome, {userType}!</h2>
        <Link to="/whoswatching" className="whos-watching-icon">
            <img src={userIcon} alt="User's Who's Watching Icon" className="whos-watching-img" />
          </Link>
    </nav>
    );
}; 

export default Navbar;