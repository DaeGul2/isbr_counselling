// Location.js
import React from "react";
import "./Location.css";

function Location() {
  return (
    <section className="location py-5 animate-on-scroll">
      <div className="container">
        <h2>LOCATION</h2>
        <img src="path/to/map-image.png" alt="Map Location" />
        <p>서울시 강남구 역삼동 123번지</p>
      </div>
    </section>
  );
}

export default Location;
