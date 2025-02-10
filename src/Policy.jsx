import React from 'react';
import './App.css';

function Policy() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
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
          <button className="toggle-btn" id="theme-toggle">
            <img className="toggle-img" src="brightness.png" alt="brightness" />
          </button>
        </div>
        <i className="fa-solid fa-bars hamburg" onClick={() => hamburg()}></i>
      </div>
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
        <i className="fa-solid fa-xmark cancel" onClick={() => cancel()}></i>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <section>
        <div className="policy">
          <h1>Privacy Policy</h1>
          <h3>Last Updated: Jan 2, 2025</h3>
          <p>This Privacy Policy outlines how Freepad (referred to as "Freepad," "we," "us," or "our"), a company established under the laws of the Republic of Seychelles, manages the personal data of its end users. This Policy, in conjunction with our Terms of Service, applies to your use of the Freepad platform. <br /><br />
            By accessing the platform and utilizing our services, you consent to the collection, storage, use, and disclosure of your data as described in this Privacy Policy. We will only collect information from you if you knowingly and explicitly provide it. <br /><br />
            Freepad is dedicated to protecting your privacy and ensuring that the personal data we collect is used, stored, and disclosed in compliance with this Privacy Policy. Please read this Policy carefully to understand our practices regarding your data and how we handle it. If you do not agree with this Privacy Policy, please refrain from using our services or providing your data to the Freepad platform.</p><br /><br />
          <h2>1. Reasons Freepad Collects Your Data</h2>
          <ol>
            <li><strong>1.1 Freepad collects your data only through lawful and fair means for the following purposes. Multiple purposes may apply at the same time:</strong>
              <ul>
                <li>To verify your identity for security purposes.</li>
                <li>To provide services to you as a user, such as processing your requests or managing your account.</li>
                <li>To update you on technical progress related to Freepad.</li>
                <li>To contact you regarding the management and administration of your Freepad account.</li>
                <li>To send you our newsletter or communicate with you in other ways about our products or services that may be of interest to you.</li>
                <li>To take appropriate action if Freepad suspects that unlawful activity or serious misconduct has occurred, is occurring, or may occur about our functions and activities.</li>
                <li>To comply with legal or regulatory obligations.</li>
              </ul>
            </li>
            <li>You may choose to interact with us anonymously or use a pseudonym unless it is impractical for us to deal with individuals we cannot identify, or if we are legally required to only interact with identified individuals. Please note that if you do not provide Freepad with the personal data we request, we may be unable to process your request to become a user, provide you with our services, or respond to your inquiries or complaints. Examples of personal data that may be collected by Freepad include your name, email address, phone number, date of birth, and other verification information related to your service usage activities. By becoming a user or otherwise choosing to provide Freepad with your data, you consent to Freepad collecting, using, and disclosing your data for the purposes outlined above.</li>
          </ol>
          {/* Continue the remaining policy sections */}
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
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
  );
}

export default Policy;
