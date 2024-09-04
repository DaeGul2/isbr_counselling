import React from "react";
import "./Funds.css";

function Funds() {
  return (
    <section className="funds-stats py-5">
      <div className="container text-center">
        <h2>OUR MEMBERS</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>1000+</h3>
            <p>Number of Experts</p>
          </div>
          
          <div className="col-md-4">
            <h3>50+</h3>
            <p>Partnered Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funds;
