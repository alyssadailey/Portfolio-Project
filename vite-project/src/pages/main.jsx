import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import WhosWatching from "./WhosWatching";
// import Dashboard from "./Dashboard"; ------------> This is a placeholder for my Dashboard elements- (navbar, projects and footer)
import './HomePage.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/WhosWatching" element={<WhosWatching />} />
        </Routes>
    </Router>
  </React.StrictMode>
);