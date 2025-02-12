import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import './stylesheets/Dashboard.css'; // Add your custom CSS here

const Dashboard = () => {
    const { userType } = useParams();

    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-content">
                <h2>Welcome, {userType}!</h2>
                <Projects userType={userType}/>
            </div>
            <Footer />
        </div>
    );
};


export default Dashboard;