import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import { FaBars, FaTwitter, FaTelegram, FaMedium } from 'react-icons/fa';

function Faq() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize AOS
    const AOS = require('aos');
    AOS.init();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`app ${theme}`}>
      <nav>
        <div className="nav-container">
          <div className="nav-holder" style={{ paddingBottom: '30px' }}>
            <div className="logo">
              <img className="logo-img" src="logoFreepad.png" alt="logo-img" />
              <div className="logo-text">Free<span>Pad</span></div>
            </div>
            <div id="logo-text">Simplifying Decentralized Fundraising</div>
          </div>
          <div className="links">
            <div className="link"><a href="index.html">Home</a></div>
            <div className="link"><a href="doc.html">About</a></div>
            <div className="link"><a href="#">KYC</a></div>
            <div className="links-btn">
              <div className="link-btn-a"><button className="link-btn">Mint NFT</button></div>
              <div className="link-btn-a"><button className="link-btn">Connect Wallet &#9662;</button></div>
            </div>
          </div>
          <div className="toggle-container">
            <button className="toggle-btn" onClick={toggleTheme}>
              <img className="toggle-img" src="brightness.png" alt="brightness" />
            </button>
          </div>
          <FaBars className="hamburg" onClick={toggleMenu} />
        </div>

        {isMenuOpen && (
          <div className="dropdown">
            <div className="links">
              <a href="index.html">Home</a>
              <a href="doc.html">About</a>
              <a href="#">KYC</a>
              <div className="links-btn">
                <div className="link-btn-a"><button className="link-btn">Mint NFT</button></div>
                <div className="link-btn-a"><button className="link-btn">Connect Wallet &#9662;</button></div>
              </div>
            </div>
            <i className="fa-solid fa-xmark cancel" onClick={toggleMenu}></i>
          </div>
        )}
      </nav>

      <main>
        <section>
          <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <p>We've compiled a list of frequently asked questions to help you avoid sifting through countless messages in the community chat.</p>
            <ol>
              <li><strong>How many NFTs can I mint per wallet?</strong><p><strong>Answer:</strong> Each wallet address can mint only one non-transferable NFT (soulbound).</p></li>
              <li><strong>Does the NFT expire?</strong><p><strong>Answer:</strong> Freepad NFTs do not expire.</p></li>
              <li><strong>How much allocation do I get in each IDO?</strong><p><strong>Answer:</strong> The minimum base allocation for all IDOs is set at $100. You may receive additional allocation during the First-Come, First-Served (FCFS) round of sales.</p></li>
              <li><strong>Can I participate with multiple addresses?</strong><p><strong>Answer:</strong> Yes, each wallet must mint its own unique NFT.</p></li>
              <li><strong>Can I pass KYC with the same documents for multiple addresses?</strong><p><strong>Answer:</strong> Yes, as long as your country is eligible.</p></li>
              <li><strong>Do you offer refunds?</strong><p><strong>Answer:</strong> Yes, all IDOs have a 24- to 48-hour 100% refund policy.</p></li>
            </ol>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a className="footer-link" href="doc.html">About</a>
            <a className="footer-link" href="ido.html">How to participate in IDOs</a>
            <a className="footer-link" href="faq.html">FAQ</a>
            <a className="footer-link" href="letter.html">Letter to Trustpad Investors</a>
            <a className="footer-link" href="policy.html">Privacy Policy</a>
            <a className="footer-link" href="terms.html">Terms of Use</a>
            <a className="footer-link" href="#">Audit (in progress...)</a>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://x.com/freepad_io?s=21"><FaTwitter /></a>
          <a href="https://t.me/Freepadofficial"><FaTelegram /></a>
          <a href="https://medium.com/@freepad.io"><FaMedium /></a>
        </div>
        <div className="footer-bottom">
          <h5>&copy; 2025 FreePad. All rights reserved.</h5>
        </div>
      </footer>
    </div>
  );
}

export default Faq;
