import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Funds from "./components/Funds";
import Philosophy from "./components/Philosophy";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ConsultationButton from "./components/ConsultationButton"; // 새로 추가된 컴포넌트
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Funds />
      <Philosophy />
      <Location />
      <Footer />
      <ConsultationButton /> {/* 우측 하단의 상담신청 버튼 */}
    </div>
  );
}

export default App;
