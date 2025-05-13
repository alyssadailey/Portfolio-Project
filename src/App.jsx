import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import WhosWatching from "./pages/WhosWatching";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    // wraps the whole app using React’s Context API so any page can access or react to the selected user type
    <UserProvider>
      {/*  React Router to handle page navigation — instead of traditional page reloads, it swaps in different React components based on the URL. */}
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