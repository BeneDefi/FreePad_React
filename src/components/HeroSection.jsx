import React from "react";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="typewriter">
        <span className="typewriter-text"></span>
        <label style={{ color: "white" }}>|</label>
      </div>
      <div className="hero-content">
        <p>Revolutionizing Decentralized Fundraising.</p>
        <div className="hero-buttons">
          <button className="btn-primary">NFT MINTING COMING SOON!!!</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
