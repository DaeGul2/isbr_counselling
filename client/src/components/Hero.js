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
        <h1>인사 ㆍ 채용컨설팅 서비스의
        바른 기준을 제시합니다.</h1>
        <p></p>
      </div>
    </section>
  );
}

export default Hero;
