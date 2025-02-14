import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
// import Footer from "../components/Footer";-- FOOTER- needed to not see while developing
// import Projects from "../components/Projects";-- Dashboard- may not use this anymore for design
import './stylesheets/Dashboard.css'; // Add your custom CSS here

const Dashboard = () => {
    const { userType } = useParams();
    const displayUser = userType || "default";

    return (
        <div className="dashboard-container">
            <Header userType={displayUser} />
            <div className="dashboard-content">
                {/* <Projects userType={userType}/> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
};


export default Dashboard;