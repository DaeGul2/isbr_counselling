import React from "react";
import SectionWithVideo from "./SectionWithVideo";
import "./About.css";
import aboutVideo from '../assets/videos/about.mp4'; // 동영상 파일을 import

function About() {
  return (
    <SectionWithVideo id="about" videoSrc={aboutVideo}>
      <div className="container">
        <h2>ABOUT US</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>What We Do</h3>
            <p>DSC는 패러다임을 이끄는 혁신적인 기업들에 투자하는 벤처캐피털입니다...</p>
          </div>
          <div className="col-md-4">
            <h3>How We Work</h3>
            <p>빠른 의사결정을 돕는 기업을 위한 FAST TRACK SYSTEM을 지니고...</p>
          </div>
          <div className="col-md-4">
            <h3>Who We Are</h3>
            <p>우리는 가수준에서 DSC와 우리의 가치와 책임을 지니고 있습니다...</p>
          </div>
        </div>
      </div>
    </SectionWithVideo>
  );
}

export default About;
