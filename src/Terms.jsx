import React, { useState, useEffect } from 'react';
import './App.css';

const Terms = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const AOS = require('aos');
    AOS.init();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    const menu = document.querySelector('.dropdown');
    menu.classList.toggle('show');
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className="nav-container">
          <div className="nav-holder" style={{ paddingBottom: '30px' }}>
            <div className="logo">
              <img className="logo-img" src="logoFreepad.png" alt="logo-img" />
              <div className="logo-text">
                Free<span>Pad</span>
              </div>
            </div>
            <div id="logo-text">Simplifying Decentralized Fundraising</div>
          </div>
          <div className="links">
            <div className="link"><a href="index.html">Home</a></div>
            <div className="link"><a href="doc.html">About</a></div>
            <div className="link"><a href="#">KYC</a></div>
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
            <button className="toggle-btn" id="theme-toggle" onClick={toggleTheme}>
              <img className="toggle-img" src="brightness.png" alt="brightness" />
            </button>
          </div>
          <i className="fa-solid fa-bars hamburg" onClick={toggleMenu}></i>
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
          <i className="fa-solid fa-xmark cancel" onClick={toggleMenu}></i>
        </div>
      </nav>

      <main>
        <section>
          <div className="terms">
            <h1>FreePad Terms of Use</h1>
            <p>Last Updated: January 31, 2025</p>
            <ol>
              <li>
                <strong>Acceptance of Terms</strong>
                <p>By accessing or using FreePad’s services (“Services”) through our website <span>https://freepad.io</span> (“Platform”), you (“User” or “you”) agree to comply with and be legally bound by these Terms of Use (“Terms”). If you do not agree to these Terms, you must refrain from using our Services.</p>
              </li>
              <li>
                <strong>Eligibility</strong>
                <p>To use our Services, you must be at least 18 years old or the age of majority in your jurisdiction. By accessing the Platform, you represent and warrant that you meet this age requirement.</p>
              </li>
              <li>
                <strong>Modifications to Terms</strong>
                <p>We reserve the right to amend or modify these Terms at any time. Any changes will be effective upon posting the revised Terms on the Platform or notifying you via email. Continued use of the Services after such changes constitutes your acceptance of the new Terms.</p>
              </li>
              <li>
                <strong>User Responsibilities</strong>
                <p>You agree to:</p>
                <ul>
                  <li>Use the Services solely for lawful purposes and in accordance with these Terms.</li>
                  <li>Maintain the confidentiality of your account information and promptly notify us of any unauthorized use.</li>
                  <li>Assume full responsibility for any consequences arising from your use of the Services.</li>
                </ul>
              </li>
              <li>
                <strong>Prohibited Activities</strong>
                <p>You are prohibited from:</p>
                <ul>
                  <li>Infringing upon any intellectual property rights of FreePad or third parties.</li>
                  <li>Engaging in unauthorized account creation, including for collusion or abuse.</li>
                  <li>Transmitting harmful code or materials that could disrupt the Platform.</li>
                  <li>Attempting to disassemble, decompile, or reverse-engineer any part of the Platform.</li>
                </ul>
              </li>
              <li>
                <strong>Intellectual Property Rights</strong>
                <p>All content on the Platform, including but not limited to text, graphics, logos, and software, is the property of FreePad and is protected by applicable intellectual property laws. You acquire no rights to such content and may not use it without our prior written consent.</p>
              </li>
              <li>
                <strong>Limitation of Liability</strong>
                <p>FreePad provides the Services on an “as is” basis and disclaims all warranties, express or implied. We are not liable for any losses or damages arising from your use of the Services, including but not limited to financial losses or data breaches.</p>
              </li>
              <li>
                <strong>Indemnification</strong>
                <p>You agree to indemnify and hold harmless FreePad, its affiliates, and their respective officers, employees, and agents from any claims, liabilities, or expenses arising from your use of the Services or violation of these Terms.</p>
              </li>
              <li>
                <strong>Termination</strong>
                <p>We reserve the right to suspend or terminate your access to the Services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or the Platform.</p>
              </li>
              <li>
                <strong>Governing Law</strong>
                <p>These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
              </li>
              <li>
                <strong>Contact Information</strong>
                <p>For any questions or concerns regarding these Terms, please contact us at support@freepad.io.</p>
              </li>
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
          <a href="https://x.com/freepad_io?s=21"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://t.me/Freepadofficial"><i className="fa-brands fa-telegram"></i></a>
          <a href="https://medium.com/@freepad.io"><i className="fa-brands fa-medium"></i></a>
        </div>
        <div className="footer-bottom">
          <h5>&copy; 2025 FreePad. All rights reserved.</h5>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
