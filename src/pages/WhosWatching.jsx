import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import './stylesheets/WhosWatching.css';

const WhosWatching = () => {
    // initializes navigate function to use useNavigate to nav to correct page after user type is selected
    const navigate = useNavigate();
    // extracts setUserType from context, which will globally store the selected identity for use across entire of the app
    const { setUserType } = useContext(UserContext);

// navigates the user to the dashbord (about me home page) after selecting what user they are
    const handleButtonClick = (usertype) => {
        // updates global state
        setUserType(usertype);
        // stores user type in local storage to ensure it persists across page reloads
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
