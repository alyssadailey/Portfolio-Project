import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import WhosWatching from "./pages/WhosWatching";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";




const App = () => {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whoswatching" element={<WhosWatching />} />
        <Route path="/dashboard/:userType" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    </UserProvider>
  );
};


export default App;