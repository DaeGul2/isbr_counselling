// App.js
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Funds from './components/Funds';
import Philosophy from './components/Philosophy';
import Location from './components/Location';
import Footer from './components/Footer';
import ConsultationButton from './components/ConsultationButton';
import './App.css';

function App() {
  // 스크롤 애니메이션 적용 함수
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('fade-in');
        } else {
          el.classList.remove('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Funds />
      <Philosophy />
      <Location />
      <Footer />
      <ConsultationButton />
    </div>
  );
}

export default App;
