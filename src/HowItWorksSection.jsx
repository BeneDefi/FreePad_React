import React from "react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How FreePad Works</h2>
      <div data-aos="zoom-in" className="steps">
        <div className="step">
          <a href="#">
            <i className="fa-solid fa-wallet"></i>
            <h3>Mint NFT</h3>
            <h4>Mint a one-time access NFT</h4>
          </a>
        </div>
        <div className="step">
          <a href="#">
            <i className="fa-solid fa-rocket"></i>
            <h3>Connect Wallet</h3>
            <h4>Join IDOs</h4>
          </a>
        </div>
        <div className="step">
          <a href="#">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Join IDOs</h3>
            <h4>Join IDOs of your choice</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
