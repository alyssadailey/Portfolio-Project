// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { useState } from 'react';
import useSound from 'use-sound';
import netflixSound from './assets/netflix-sound.mp3';
import './index.css';

// import App from './App.jsx'


const HomePage = () => {

  const [play] = useSound(netflixSound);
  
  const handleClick = () => {
    play();
  };
  
  return (
    <div onClick={handleClick}>
      <h1 className="netflix-title">Alyssa Dailey</h1>
      </div>
    
  );
};

export default HomePage;