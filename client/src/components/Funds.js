import React from "react";
import "./Funds.css";

function Funds() {
  return (
    <section className="funds-stats py-5">
      <div className="container text-center">
        <h2>OUR FUNDS</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>19</h3>
            <p>Number of Funds</p>
          </div>
          <div className="col-md-4">
            <h3>₩12,035억</h3>
            <p>AUM</p>
          </div>
          <div className="col-md-4">
            <h3>264</h3>
            <p>Partnered Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funds;
