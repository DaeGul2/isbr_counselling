import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/images/background.png'; // src 내 경로로 수정

function Hero() {
  return (
    <section  id="hero"
      className="hero" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'white', 
        padding: '100px 0', 
        textAlign: 'center' 
      }}
    >
      <div className="container text-center">
        <h1>We are With Your Mission</h1>
        <p>with devotion and commitment,<br /> we embody our mission – Dream Shelter Charity</p>
      </div>
    </section>
  );
}

export default Hero;
