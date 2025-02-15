import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
         <footer className="footer">
            {/* <h2>Got a project in mind?</h2>
            <h1>Let's connect</h1>
            <button className="write-msg-btn">Write a message</button>  */}
            <p className="footer-text">FEEL FREE TO CONNECT WITH ME ON SOCIALS</p>
            <div className="social-links">
            <Link to="https://github.com/alyssadailey" className="social-link">GITHUB</Link>
            <Link to="https://www.twitter.com" target="_blank" className="social-link">SPOTIFY</Link>
            <Link to="https://www.linkedin.com/in/alyssa-dailey/" className="social-link">LINKEDIN</Link>
            </div>
        </footer>
        </div>
    );
};

export default Footer;