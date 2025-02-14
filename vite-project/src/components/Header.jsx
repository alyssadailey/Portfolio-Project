import React from "react";
import Navbar from "./Navbar";
import './stylesheets/Navbar.css'

const Header = ({ userType }) => {
    return (
        <header className="header">
            <Navbar userType={userType} />
            <h1>My Portfolio</h1>
        </header>
    );
};

export default Header;