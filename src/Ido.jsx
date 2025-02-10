import React from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ido = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const hamburg = () => {
    // Add the function logic for hamburger menu
  };

  const cancel = () => {
    // Add the function logic to close the dropdown
  };

  return (
    <div>
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
          <i
            className="fa-solid fa-bars hamburg"
            onClick={hamburg}
          />
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
          <i className="fa-solid fa-xmark cancel" onClick={cancel} />
        </div>
      </nav>
      <main>
        <section>
          <div className="how-to-participate">
            <h1>How to Participate in an IDO</h1>
            <ol>
              <li>
                <strong>Mint a Soulbound NFT:</strong>
                <p>
                  Purchase a one-time soulbound NFT on the Binance Smart Chain for $100 to secure a guaranteed
                  allocation of $100 in all IDOs.
                </p>
              </li>
              <li>
                <strong>Register for the IDO:</strong>
                <p>Sign up during the registration phase.</p>
              </li>
              <li>
                <strong>Buy your Allocation:</strong>
                <p>
                  During the sale period complete two transactions; first, approve USDT (Bep20), then purchase your
                  allocation.
                </p>
              </li>
              <li>
                <strong>Participate in FCFS:</strong>
                <p>
                  If there are tokens remaining after the normal sale rounds, you can take part in the First-Come,
                  First-Served (FCFS) phase. FCFS is divided into four intervals of 5 minutes each, allowing for
                  allocations of 50%, 100%, 200%, and Unlimited.
                </p>
              </li>
              <li>
                <strong>Claim Your Tokens:</strong>
                <p>Claim your tokens during the designated claiming period.</p>
              </li>
            </ol>
            <br />
            <br />
            <p>
              Freepad sales are facilitated by Binance Smart Chain using USDT. All users with a soulbound NFT are
              eligible for equal allocations in all IDOs, which helps eliminate whale activities and ensures fairness
              for all participants. There are no tiers or levels, no need to stake platform tokens, and no extra
              allocations for longer staking pools. Freepad provides participants with early access to promising
              projects without the financial burden of purchasing the IDO platform's native tokens and staking them.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a className="footer-link" href="doc.html">
              About
            </a>
            <a className="footer-link" href="ido.html">
              How to participate in IDOs
            </a>
            <a className="footer-link" href="faq.html">
              FAQ
            </a>
            <a className="footer-link" href="letter.html">
              Letter to Trustpad Investors
            </a>
            <a className="footer-link" href="policy.html">
              Privacy Policy
            </a>
            <a className="footer-link" href="terms.html">
              Terms of Use
            </a>
            <a className="footer-link" href="#">
              Audit (in progress...)
            </a>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://x.com/freepad_io?s=21">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="https://t.me/Freepadofficial">
            <i className="fa-brands fa-telegram" />
          </a>
          <a href="https://medium.com/@freepad.io">
            <i className="fa-brands fa-medium" />
          </a>
        </div>
        <div className="footer-bottom">
          <h5>&copy; 2025 FreePad. All rights reserved.</h5>
        </div>
      </footer>
    </div>
  );
};

export default Ido;
