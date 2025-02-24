import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
         <footer className="footer">
        {/* displays message and links to socials */}
            <p className="footer-text">FEEL FREE TO CONNECT WITH ME ON SOCIALS</p>
            <div className="social-links">
            <Link to="https://github.com/alyssadailey" className="social-link">GITHUB</Link>
            <Link to="https://open.spotify.com/user/alyssadailey28" target="_blank" className="social-link">SPOTIFY</Link>
            <Link to="https://www.linkedin.com/in/alyssa-dailey/" className="social-link">LINKEDIN</Link>
            </div>
        </footer>
        </div>
    );
};

export default Footer;