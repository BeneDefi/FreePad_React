import React from 'react';

const LetterPage = () => {
  return (
    <>
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
          <i className="fa-solid fa-bars hamburg" onClick={() => { /* toggle menu function */ }}></i>
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
          <i className="fa-solid fa-xmark cancel" onClick={() => { /* cancel menu function */ }}></i>
        </div>
      </nav>

      <main>
        <section className="letter">
          <div>
            <h1 className="letter-h1">What is TrustPad?</h1>
            <p>TrustPad is the first multi-chain Initial DEX Offering (IDO) platform to support sales across all Ethereum Virtual Machine (EVM) networks, Solana, and the Terra blockchain. Launched by a group of anonymous individuals with Lechiffre as its CEO, TrustPad has earned its place as a trusted name in the launchpad space. Between 2021 and 2024, it successfully raised over $20 million for more than 130 projects.</p>
            <p>TrustPad’s commitment to a quality-over-quantity approach sets it apart, delivering exceptional returns on investment (ROI) for its users. Flagship projects like Bloktopia, Sidus Heroes, Gensokishi, Polkafantasy, and Fishtown offered ROIs exceeding 200x, cementing TrustPad’s reputation as a top-tier launchpad. This success even earned TrustPad a feature in a Binance article, further highlighting its role as a leader in the industry.</p>
            <br /><br />
            <h2>What Happened to TrustPad?</h2>
            <p>The TrustPad team operated under pseudonyms, with Lechiffre serving as the Founder and Double Trouble as the CTO. Trouble joined the team during the introduction of the controversial Diamond Hand rule, a policy designed to reward long-term token holders. While the rule gained strong support within the core community, it also faced significant backlash from the broader audience. Despite the criticism, TrustPad stood firm, believing the rule would benefit its ecosystem.</p>
            <br /><br />
            <p>However, the platform faced escalating challenges during the crypto bear market. Token values declined sharply, leading to a divisive decision: the migration from V1 TPAD to V2 TPAD. The migration imposed a strict deadline, and any unclaimed V2 tokens were burned. This move drew accusations of price manipulation from frustrated users, further straining TrustPad’s relationship with its community.</p>
            <br /><br />
            <p>As the bear market deepened, TrustPad struggled to regain momentum. Following an extended delay for an audit, the platform resumed IDOs, but the IDO market had turned bearish, with 90% of sales being refunded. The inactivity persisted, and TrustPad has not conducted any IDOs in over six months.</p>
            <br /><br />
            <p>Adding to the uncertainty, Lechiffre and Double Trouble have remained unresponsive, with their current whereabouts unknown. Neither the remaining active team members nor I have received any communication from them. This prolonged silence has fueled growing concern within the community, leaving many to question whether TrustPad has reached the end of its journey.</p>
            <br /><br />
            <h2>A Personal Note: Introducing Freepad</h2>
            <p>While TrustPad’s challenges have been disheartening, they have also inspired me to take a new path. With over five years of experience in the launchpad industry, I have gained the insights necessary to address the fundamental issues facing launchpads, investors, and projects seeking to raise funds.</p>
            <br /><br />
            <p>Out of this knowledge and experience, I created Freepad, an independent project built from the ground up. Freepad is designed to tackle the challenges that hinder the success of traditional launchpads, offering innovative solutions to benefit all stakeholders in the ecosystem.</p>
            <br /><br />
            <p>Though I remain grateful for the opportunities TrustPad provided and hopeful for its future, my focus now lies in building Freepad. This new venture represents a continuation of my commitment to improving the launchpad space and fostering trust and transparency for both investors and projects.</p>
            <br /><br />
            <p>Only time will reveal the fate of TrustPad, but I am confident that the lessons learned along the way will shape the future of decentralized fundraising for the better.</p>
            <br /><br />
            <h2>Compensation Plan for TPAD Holders/Stakers</h2>
            <p>Trustpad is my first love and its loyal community deserves all the good things. With this in mind, I decided to allocate 50% of the revenue generated from successful IDO sales to be directed to compensating TPAD2 holders and stakers.</p>
            <br /><br />
            <h2>Compensation Formula</h2>
            <p>Users will receive compensation based on their existing Trustpad tier weight. The duration of staking and additional boosters will not be considered. For example, if you hold 20,000 TPAD and stake in the 1090-day pool, you will receive the same compensation as someone who holds 20,000 TPAD in their wallet or stakes in a shorter staking pool, provided all parties meet the eligibility criteria. Users who hold more tokens than required for a tier but less to be in the next tier will receive the same compensation as the users holding just enough tokens for that tier.</p>
            <br /><br />
            <h2>Eligibility Criteria</h2>
            <p>To be eligible for compensation, the user's wallet address must meet the following requirements:</p>
            <ol>
              <li>Hold or be staking a minimum of 20,000 TPAD 2.0.</li>
              <li>Minted Freepad NFT (Soulbound).</li>
              <li>Must Have participated in at least 75% of the IDOs on Freepad for the month under review.</li>
            </ol>
            <br /><br />
            <h2>Distribution</h2>
            <p>Eligible wallets will receive compensation once a month. Distribution will be in usdt on the Binance Smart chain.</p>
            <br /><br />
            <h2>Duration of Compensation</h2>
            <p>This compensation plan will continue until at least $1,500,000 has been distributed to eligible users.</p>
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
    </>
  );
};

export default LetterPage;
