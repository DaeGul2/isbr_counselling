import React from "react";
import SectionWithVideo from "./SectionWithVideo";
import "./About.css";
import aboutVideo from '../assets/videos/about.mp4'; // 동영상 파일을 import

function About() {
  return (
    <SectionWithVideo id="about" videoSrc={aboutVideo}>
      <div className="container">
        <h2 className="about-heading">About us</h2>
        <p className="about-subheading">인사바른은 다음의 미션을 지향합니다.</p>
        <p className="about-description">
          항상 겸손한 자세로 꾸준한 자기개발을 하는 <span className="highlight">“자문바른”</span> <p></p>
          <span className="highlight">“전문가와의 1:1 매칭”</span> 서비스를 제공합니다.
        </p>
        <p className="about-text">
          자문바른은 공공기관 채용컨설팅 분야의 전문가들로 구성된 조직으로서 공정성과 전문성에 기반한 자문 컨설팅 서비스를 제공합니다. 
          <p></p>최고의 성과를 낼 수 있도록 최선의 솔루션을 제공합니다.
        </p>
      </div>
    </SectionWithVideo>
  );
}

export default About;
