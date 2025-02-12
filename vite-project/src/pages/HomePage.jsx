// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import netflixSound from '/assets/nouveau-jingle-netflix.mp3';
import './HomePage.css';
// import App from './App.jsx'

// created home page element
const HomePage = () => {
// creates navigate element to useNavigate to navigate to Who's watching page
  const navigate = useNavigate();
// play element to refrence sound file we want to play
  const [play] = useSound(netflixSound);

  // sound will play at click
  const handleClick = () => {
    play();
    setTimeout(()=>{
      navigate("/WhosWatching")
    }, 4100);
  };
  // Displays my name in home page, and allows the functionality of the click to work anywhere on the page
  return (
    <div className="home-page" onClick={handleClick}>
      <h1 className="netflix-title">Alyssa Dailey</h1>
      </div>
    
  );
};
// exports HomePage
export default HomePage;