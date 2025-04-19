import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import './stylesheets/WhosWatching.css';

const WhosWatching = () => {
    // initializes navigate function
    const navigate = useNavigate();
    const { setUserType } = useContext(UserContext);
// navigates the user to the dashboard after selecting what user they are
    const handleButtonClick = (usertype) => {
        setUserType(usertype);
        localStorage.setItem("userType", usertype);
        navigate(`/dashboard/${usertype}`);
    };

    return(
        // creates the who's watching container- contains all html for the whos watching page
        <div className="whos-watching-container">

            <h1>Who's watching?</h1>
            
            <div className="buttons-container">
                {/* Employeer Icon */}
                <button className="watching-button" onClick={() => handleButtonClick('Employer')}>
                <img src="/assets/Teal-NF-Icon.png" alt="employer" className="button-icon" />
                <p className="button-text">Employer</p>
                </button>
                {/* Developer Icon */}
                <button className="watching-button" onClick={() => handleButtonClick('Developer')}>
                <img src="/assets/Pink-NF-Icon.png" alt="Developer" className="button-icon" />
                <p className="button-text">Developer</p>
                </button>
                {/* Friend Icon */}
                <button className="watching-button" onClick={() => handleButtonClick('Friend')}>
                <img src="/assets/Blue-NF-Icon.png" alt="Friend" className="button-icon" />
                <p className="button-text">Friend</p>
                </button>
                {/* Stranger Icon */}
                <button className="watching-button" onClick={() => handleButtonClick('Stranger')}>
                <img src="assets/Plumb-NF-Icon.png" alt="Stranger" className="button-icon" />
                <p className="button-text">Stranger</p>
                </button>

            </div>
        </div>
    );
};

export default WhosWatching;
