import React from "react";
import { Link } from "react-router-dom";
import "../components/stylesheets/Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About me</Link>
      <Link className="nav-link" to="/portfolio">Portfolio</Link>
      <Link className="nav-link" to="/contact">Contact me</Link>
      <Link className="nav-link" to="/resume">Resume</Link>
    </nav>
    );
};

export default Navbar;