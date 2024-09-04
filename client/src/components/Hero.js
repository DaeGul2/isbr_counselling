// Hero.js
import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/images/background.png'; // 배경 이미지 경로

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
