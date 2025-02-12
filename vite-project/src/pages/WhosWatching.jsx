import React from 'react';
import { useNavigate } from "react-router-dom";
import './WhosWatching.css';

const WhosWatchingPage = () => {
    // initializes navigate function
    const navigate = useNavigate();

    const handleButtonClick = (usertype) => {
        navigate(`/dashboard/${usertype}`);
    };

    return(
        <div className="whos-watching-container">
            <h1>Who's watching?</h1>
            <div className="buttons-container">

                <button className="watching-button">
                <img src="/assets/Teal-NF-Icon.png" alt="Recruiter" className="button-icon" />
                <p className="button-text">Recruiter</p>
                </button>

                <button className="watching-button">
                <img src="/assets/Pink-NF-Icon.png" alt="Developer" className="button-icon" />
                <p className="button-text">Developer</p>
                </button>

                <button className="watching-button">
                <img src="/assets/Blue-NF-Icon.png" alt="Friend" className="button-icon" />
                <p className="button-text">Friend</p>
                </button>

                <button className="watching-button">
                <img src="assets/Plumb-NF-Icon.png" alt="Stranger" className="button-icon" />
                <p className="button-text">Stranger</p>
                </button>
            </div>
        </div>
    );
};

export default WhosWatchingPage;
