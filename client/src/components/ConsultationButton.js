import React from "react";
import "./ConsultationButton.css";

function ConsultationButton() {
  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSc7k43P48BXbhACG08XRs6md9lejK0a0Kl70ZmcHaHtImrjyg/viewform?usp=sf_link", "_blank");
  };

  return (
    <button className="consultation-button" onClick={handleClick}>
      상담신청하기
    </button>
  );
}

export default ConsultationButton;
