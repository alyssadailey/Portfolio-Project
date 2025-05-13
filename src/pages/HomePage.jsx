import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import netflixSound from '/assets/nouveau-jingle-netflix.mp3';
import './stylesheets/HomePage.css';

// creates HomePage function
const HomePage = () => {
// creates navigate function to use useNavigate
  const navigate = useNavigate();
// play element to refrence sound file we want to play
  const [play] = useSound(netflixSound);
// initiates animations on text
  const [animate, setAnimate] = useState(false);

  // sound will play at click
  const handleClick = () => {
    setAnimate(true);
    play();
    setTimeout(()=>{
      navigate("/WhosWatching")
    }, 4100);
  };
  
  // Displays my name on home page, and allows the functionality of the click to work anywhere on the page
  return (
    <div className="home-page" onClick={handleClick}>
      <h1 className={`netflix-title ${animate ? "animate-text" : ""}`}>Alyssa Dailey</h1>
      </div>
    
  );
};

export default HomePage;