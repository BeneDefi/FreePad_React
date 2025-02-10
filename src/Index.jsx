import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./styles.css";

const texts = ["WELCOME TO FREEPAD"];
const speed = 100;

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    AOS.init({ duration: 1200 });
    typeWriter();
  }, []);

  useEffect(() => {
    document.body.classList.add(theme + "-mode");
  }, [theme]);

  const typeWriter = () => {
    if (charIndex < texts[textIndex].length) {
      setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        typeWriter();
      }, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  };

  const eraseText = () => {
    if (displayText.length > 0) {
      setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        eraseText();
      }, 50);
    } else {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
      setTimeout(typeWriter, 500);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="nav-holder" style={{ paddingBottom: "30px" }}>
            <div className="logo">
              <img className="logo-img" src="logoFreepad.png" alt="logo-img" />
              <div className="logo-text">Free<span>Pad</span></div>
            </div>
            <div id="logo-text">Simplifying Decentralized Fundraising</div>
          </div>
          <div className="links">
            <a href="index.html">Home</a>
            <a href="doc.html">About</a>
            <a href="#">KYC</a>
            <div className="links-btn">
              <button className="link-btn">Mint NFT</button>
              <button className="link-btn">Connect Wallet &#9662;</button>
            </div>
          </div>
          <button className="toggle-btn" onClick={toggleTheme}>
            <img className="toggle-img" src="brightness.png" alt="brightness" />
          </button>
        </div>
      </nav>

      <main>
        <div className="hero">
          <div className="typewriter">
            <span className="typewriter-text">{displayText}</span>
            <label style={{ color: "white" }}>|</label>
          </div>
          <div className="hero-content">
            <p>Revolutionizing Decentralized Fundraising.</p>
            <button className="btn-primary">NFT MINTING COMING SOON!!!</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="doc.html">About</a>
            <a href="ido.html">How to participate in IDOs</a>
            <a href="faq.html">FAQ</a>
            <a href="letter.html">Letter to Trustpad Investors</a>
            <a href="policy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Use</a>
            <a href="#">Audit (in progress...)</a>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://x.com/freepad_io?s=21">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://t.me/Freepadofficial">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="https://medium.com/@freepad.io">
            <i className="fa-brands fa-medium"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <h5>&copy; 2025 FreePad. All rights reserved.</h5>
        </div>
      </footer>
    </div>
  );
};

export default Home;
