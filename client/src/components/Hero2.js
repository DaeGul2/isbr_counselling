// Hero2.js
import React from 'react';
import './Hero2.css';
import aboutVideo from '../assets/videos/about2.mp4'; // 동영상을 import

function Hero2() {
  return (
    <section id="hero2" className="hero2">
      <video className="background-video" autoPlay muted loop>
        <source src={aboutVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container text-center">
        <h1>Welcome to Our Mission</h1>
        <p>Committed to making a difference,<br /> one step at a time</p>
      </div>
    </section>
  );
}

export default Hero2;
