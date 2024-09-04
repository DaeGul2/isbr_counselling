import React, { useEffect, useState } from "react";
import logoImage from '../assets/images/logo.jpg'; // 로고 이미지를 불러옵니다

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      // 스크롤을 내릴 때 헤더를 숨깁니다
      setShowHeader(false);
    } else {
      // 스크롤을 올릴 때 헤더를 표시합니다
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      style={{
        padding: "10px 0",
        backgroundColor: "#000",
        position: "fixed",
        width: "100%",
        top: showHeader ? "0" : "-80px", // 헤더의 높이에 따라 조정
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "top 0.3s ease-in-out",
        borderBottom: "1px solid #333", // 헤더 하단에 라인을 추가
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logoImage} alt="Company Logo" style={{ height: "40px", marginRight: "10px" }} />
        </div>
        <nav>
          <ul style={{ listStyleType: "none", display: "flex", margin: 0, padding: 0 }}>
            <li style={{ marginLeft: "20px" }}>
              <a href="#hero" style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>HOME</a>
            </li>
            <li style={{ marginLeft: "20px" }}>
              <a href="#about" style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>ABOUT</a>
            </li>
            <li style={{ marginLeft: "20px" }}>
              <a href="#funds" style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>FUNDS</a>
            </li>
            <li style={{ marginLeft: "20px" }}>
              <a href="#philosophy" style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>PHILOSOPHY</a>
            </li>
            <li style={{ marginLeft: "20px" }}>
              <a href="#location" style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>LOCATION</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
