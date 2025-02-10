import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a className="footer-link" href="doc.html" aria-label="About">
            About
          </a>
          <a
            className="footer-link"
            href="ido.html"
            aria-label="How to participate in IDOs"
          >
            How to participate in IDOs
          </a>
          <a className="footer-link" href="faq.html" aria-label="FAQ">
            FAQ
          </a>
          <a
            className="footer-link"
            href="letter.html"
            aria-label="Letter to Trustpad Investors"
          >
            Letter to Trustpad Investors
          </a>
          <a
            className="footer-link"
            href="policy.html"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            className="footer-link"
            href="terms.html"
            aria-label="Terms of Use"
          >
            Terms of Use
          </a>
          <a className="footer-link" href="#" aria-label="Audit status">
            Audit (in progress...)
          </a>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://x.com/freepad_io?s=21" aria-label="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://t.me/Freepadofficial" aria-label="Telegram">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="https://medium.com/@freepad.io" aria-label="Medium">
          <i className="fa-brands fa-medium"></i>
        </a>
      </div>
      <div className="footer-bottom">
        <h5>&copy; 2025 FreePad. All rights reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
