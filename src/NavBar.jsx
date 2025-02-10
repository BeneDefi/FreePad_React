import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-holder" style={{ paddingBottom: "30px" }}>
          <div className="logo">
            <img className="logo-img" src="logoFreepad.png" alt="logo-img" />
            <div className="logo-text">
              Free<span>Pad</span>
            </div>
          </div>
          <div id="logo-text">Simplifying Decentralized Fundraising</div>
        </div>
        <div className="links">
          <div className="link">
            <a href="index.html">Home</a>
          </div>
          <div className="link">
            <a href="doc.html">About</a>
          </div>
          <div className="link">
            <a href="#">KYC</a>
          </div>
          <div className="links-btn">
            <div className="link-btn-a">
              <button className="link-btn">Mint NFT</button>
            </div>
            <div className="link-btn-a">
              <button className="link-btn">Connect Wallet &#9662;</button>
            </div>
          </div>
        </div>
        <div className="toggle-container">
          <button className="toggle-btn" id="theme-toggle">
            <img className="toggle-img" src="brightness.png" alt="brightness" />
          </button>
        </div>
        <i className="fa-solid fa-bars hamburg" onClick={() => {}}></i>
      </div>
      <div className="dropdown">
        <div className="links">
          <a href="index.html">Home</a>
          <a href="doc.html">About</a>
          <a href="#">KYC</a>
          <div className="links-btn">
            <div className="link-btn-a">
              <button className="link-btn">Mint NFT</button>
            </div>
            <div className="link-btn-a">
              <button className="link-btn">Connect Wallet &#9662;</button>
            </div>
          </div>
        </div>
        <i className="fa-solid fa-xmark cancel" onClick={() => {}}></i>
      </div>
    </nav>
  );
};

export default NavBar;
