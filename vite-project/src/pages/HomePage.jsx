// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import useSound from 'use-sound';
import netflixSound from '/assets/nouveau-jingle-netflix.mp3';
import './HomePage.css';

// import App from './App.jsx'


const HomePage = () => {

  const [play] = useSound(netflixSound);
  
  const handleClick = () => {
    play();
  };
  
  return (
    <div className="home-page" onClick={handleClick}>
      <h1 className="netflix-title">Alyssa Dailey</h1>
      </div>
    
  );
};

export default HomePage;