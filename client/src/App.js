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
import Puzzle from './components/Puzzle'; // Puzzle 컴포넌트 추가
import './App.css';

function App() {
  // 스크롤 애니메이션 적용 함수
  useEffect(() => {
    const handleScroll = () => {
      // 일반 애니메이션 적용
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('fade-in');
        } else {
          el.classList.remove('fade-in');
        }
      });

      // 퍼즐 애니메이션 적용
      const puzzleContainer = document.querySelector('.puzzle-container');
      if (puzzleContainer) {
        const rect = puzzleContainer.getBoundingClientRect();
        const halfwayPoint = window.innerHeight / 2; // 화면 절반 지점

        // 퍼즐 섹션이 화면에 절반 이상 보이면 퍼즐이 흩어지게 함
        if (rect.top < halfwayPoint && rect.bottom > 0) {
          document.querySelectorAll('.puzzle-piece').forEach(piece => {
            piece.classList.remove('assembled'); // 퍼즐이 흩어지게 설정
          });
        } else {
          // 퍼즐이 중앙에 모이게 설정 (초기 상태)
          document.querySelectorAll('.puzzle-piece').forEach(piece => {
            piece.classList.add('assembled'); // 퍼즐이 모이게 함
          });
        }
      }
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
      <Puzzle /> {/* 퍼즐 애니메이션 컴포넌트 */}
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
