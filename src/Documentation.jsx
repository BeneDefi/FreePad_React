import React from "react";
import "./style.css"; // Make sure your CSS is properly linked
import AOS from "aos";
import "aos/dist/aos.css";

const Documentation = () => {
  React.useEffect(() => {
    AOS.init(); // Initialize AOS animations when component mounts
  }, []);

  return (
    <div>
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
              <img
                className="toggle-img"
                src="brightness.png"
                alt="brightness"
              />
            </button>
          </div>
          <i
            className="fa-solid fa-bars hamburg"
            onClick={() => alert("hamburg clicked")}
          ></i>
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
          <i
            className="fa-solid fa-xmark cancel"
            onClick={() => alert("cancel clicked")}
          ></i>
        </div>
      </nav>

      <main>
        <section className="documentation">
          <p style={{ fontSize: "larger", fontWeight: "800" }}>
            Freepad addresses critical issues in the crypto space, such as
            scams, rug-pulls, and high participation thresholds.
          </p>
          <h1>FreePad Launchpad</h1>
          <h2>Simplifying Fundraising</h2>
          <p>
            Freepad is a groundbreaking, token-free launchpad designed to make
            decentralized fundraising accessible to everyone. By eliminating
            entry barriers and introducing robust user protection measures,
            Freepad addresses critical issues in the crypto space, such as
            scams, rug-pulls, and high participation thresholds.
          </p>
          <h3>Overview</h3>
          <p>
            FreePad is a novel multi-chain fundraising platform with no
            high-cost entry barriers and user protection at its core. The only
            requirement to participate in our presales is to mint a one-time NFT
            for $100 and register for the presale during the registration
            period. All investments have a 48-hour refund policy from TGE.
          </p>
          <br />
          <p>
            The Web3 space is maturing, and with it comes the demand for
            smarter, user-friendly solutions. A tokenless launchpad is not just
            an idea; it’s the next logical evolution in decentralized project
            fundraising and incubation.
          </p>
          <br />
          <p>
            Let’s build a future—where projects and communities thrive without
            the unnecessary baggage of token-centric models.
          </p>
          <h3>Goals</h3>
          <ol>
            <li>
              To make Defi investing accessible to all with no entry barrier.
            </li>
            <li>
              To make Defi investing safer by having strong user protection with
              up to 48 hours of refund policy.
            </li>
          </ol>
          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Accessible Participation:</strong> Users can register and
              join IDOs without the need to stake or hold tokens provided they
              mint a one-time $20 Freepad NFT.
            </li>
            <li>
              <strong>Fair Allocation:</strong> Registered participants receive
              a maximum allocation of $100 in the first sales round, with
              subsequent rounds offering increased flexibility.
            </li>
            <li>
              <strong>Transparent Revenue Model:</strong> 50% of revenue
              generated on all successful launches for that month goes back to
              compensating the Trustpad tier holders/stakers...
            </li>
            <li>
              <strong>Revenue sharing:</strong> 50% of revenue generated on all
              successful launches for that month goes back to compensating the
              Trustpad tier holders/stakers. The other 50% is used for the team
              wages, marketing, and continued development of the project.
              Revenue sharing will shift from Trustpad users to the general
              community after a certain threshold is reached.
            </li>
          </ul>
          <h3>Why Freepad?</h3>
          <p>
            The platform is designed to protect users through its SAFU policy,
            ensuring safety in every sale. With no entry barriers and a focus on
            decentralization, Freepad provides a secure and inclusive
            environment for crypto investors of all levels.
          </p>

          <h3>Why a Tokenless Launchpad is the Next Big Thing in Web3</h3>
          <p>
            The blockchain ecosystem is evolving rapidly, and innovation
            continues to reshape how projects raise capital and engage with
            their communities. Among the emerging trends, a tokenless launchpad
            stands out as a groundbreaking paradigm, poised to redefine
            fundraising and project incubation in the decentralized space.
          </p>
          <br />
          <br />
          <em>
            Here are compelling reasons why a tokenless launchpad is the next
            big thing:
          </em>
          <br />
          <br />

          <h4>1. Eliminating the Complexity of Dual Tokens</h4>
          <p>
            Traditional launchpads typically issue their tokens to facilitate
            participation. While this can create utility within their
            ecosystems, it often introduces unnecessary complexity and
            speculation. A tokenless launchpad removes this friction:
          </p>
          <ul>
            <li>
              <strong>No dependency on native token volatility:</strong>
              <p>
                Participants are no longer at the mercy of market fluctuations
                of the launchpad’s token.
              </p>
            </li>
            <li>
              <strong>
                Participants are no longer at the mercy of market fluctuations
                of the launchpad’s token.
              </strong>
              <p>
                Users can focus on the project they’re supporting without
                needing to acquire and manage an additional token.
              </p>
            </li>
            <li>
              <strong>Broad accessibility:</strong>
              <p>
                Participants can engage using native blockchain tokens (e.g.,
                ETH, BNB) or stablecoins, making the process more inclusive and
                intuitive.
              </p>
            </li>
          </ul>

          <h4>2. Trust and Transparency</h4>
          <p>
            One of the core values of blockchain technology is trustlessness.
            Ironically, many launchpads create centralized dependencies by
            requiring their tokens for participation. A tokenless model fosters
            transparency by:
          </p>
          <ul>
            <li>
              <strong>Reducing conflicts of interest:</strong>
              <p>
                Launchpads no longer have incentives to manipulate or prioritize
                their native token’s performance.
              </p>
            </li>
            <li>
              <strong>Aligning incentives:</strong>
              <p>
                The launchpad’s success is directly tied to the success of
                projects, not token trading volumes or speculative hype.
              </p>
            </li>
            <li>
              <strong>Fair participation mechanisms:</strong>
              <p>
                Focus shifts toward ensuring equitable access to quality
                projects instead of token-based tier systems, which often favor
                whales.
              </p>
            </li>
          </ul>

          <h4>3. Increased Focus on Project Quality</h4>
          <p>
            Without the distraction of promoting a native token, a tokenless
            launchpad can channel its efforts into vetting and incubating
            high-quality projects.
          </p>
          <ul>
            <li>
              <strong>Enhanced due diligence:</strong>
              <p>
                Resources can be allocated to screening teams, roadmaps, and
                technical feasibility.
              </p>
            </li>
            <li>
              <strong>Community-centric approach:</strong>
              <p>
                Success is measured by the value delivered to both projects and
                participants, not token metrics.
              </p>
            </li>
            <li>
              <strong>Improved outcomes:</strong>
              <p>
                A strong focus on fundamentals reduces the risk of scams and
                improves long-term project viability.
              </p>
            </li>
          </ul>

          <h4>4. Lower Barriers to Entry for Projects</h4>
          <p>
            Requiring projects to integrate with a launchpad’s token often
            introduces unnecessary friction. A tokenless model benefits projects
            by:
          </p>
          <ul>
            <li>
              <strong>Simplified fundraising process:</strong>
              <p>
                Startups can raise funds in widely used cryptocurrencies or
                stablecoins.
              </p>
            </li>
            <li>
              <strong>Greater flexibility:</strong>
              <p>
                Projects don’t need to adopt external tokenomics that might
                conflict with their models.
              </p>
            </li>
            <li>
              <strong>Wider audience reach:</strong>
              <p>
                By eliminating token requirements, launchpads can attract a more
                diverse base of investors and supporters.
              </p>
            </li>
          </ul>

          <h4>5. Sustainability and Long-Term Vision</h4>
          <p>
            Tokenless launchpads are inherently designed for long-term value
            creation rather than short-term speculative gains. This makes them
            more resilient in volatile market conditions:
          </p>
          <ul>
            <li>
              <strong>Avoiding pump-and-dump cycles:</strong>
              <p>
                Without a launchpad token, the ecosystem is insulated from the
                speculative booms and busts that often plague token-based
                platforms.
              </p>
            </li>
            <li>
              <strong>Focus on utility and innovation:</strong>
              <p>
                By decoupling from token economics, launchpads can prioritize
                sustainable growth and ecosystem development.
              </p>
            </li>
          </ul>

          <h4>6. Aligning with Web3 Principles</h4>
          <p>
            The Web3 ethos centers around decentralization, user empowerment,
            and interoperability. A tokenless launchpad aligns perfectly with
            these principles:
          </p>
          <ul>
            <li>
              <strong>Decentralized access:</strong>
              <p>
                Anyone can participate using universally accepted tokens,
                fostering inclusivity.
              </p>
            </li>
            <li>
              <strong>Interoperability:</strong>
              <p>
                The model can seamlessly integrate across blockchains without
                imposing additional token dependencies.
              </p>
            </li>
            <li>
              <strong>User-first design:</strong>
              <p>
                The focus is on empowering users and projects rather than
                creating isolated token silos.
              </p>
            </li>
          </ul>

          <br />
          <br />
          <h4>7. Tokenomics/Revenue</h4>
          <p>
            Freepad will make use of the following strategies to generate
            revenue:
          </p>
          <ol>
            <li>
              <strong>One-time NFT mint for $100:</strong>
              <p>
                Freepad will have a total of 100M nontransferable NFTs based on
                one per wallet. To participate in our sales, users are required
                to mint a one-time NFT for $100. This NFT gives the wallet
                access to all sales on Freepad with a minimum of $100 in
                guaranteed initial allocation.
              </p>
            </li>
            <li>
              <strong>Launchpad application fee:</strong>
              <p>
                All projects applying to raise funds on Freepad are required to
                pay a non-refundable fee. This is to ensure that there is no
                abuse of the application process and ensure only legitimate
                projects send in requests.
              </p>
            </li>
            <li>
              <strong>Advertisement fees:</strong>
              <p>
                Freepad will charge any projects wishing to advertise on its
                platform or use any of our services a certain fee. These go into
                the treasury and project development.
              </p>
            </li>
          </ol>
          <br />
          <br />
          <h3>User Protection Policy (SAFU)</h3>
          <p>
            Freepad will adopt a user self-protection model for all its sales.
            Users can choose between a full refund for any sale within 48 hours
            post-TGE provided no token was claimed.
          </p>
          <br />
          <br />
          <a href="https://docs.google.com/document/d/1WEbnkVywagHJ0IPnePVaH7N8ejD5qsIa_fqEf_doIEA/edit">
            <b
              style={{
                color: "red",
                textDecoration: "none",
                fontSize: "large",
                fontWeight: 600,
              }}
            >
              Freepad vs Traditional Launchpads.
            </b>
          </a>
          <br />
          <br />
          <h3>Trustpad holders/stakers compensation</h3>
          <p>
            $TPAD V2 stakers/holders will be compensated with 50% of revenue
            generated from successful sales for that month. Compensation will
            follow the Trustpad's tier weight model. This compensation will
            continue until a certain threshold is reached.
          </p>

          <h3>Eligibility</h3>
          <p>
            The user must have participated in at least 75% of sales for the
            month under review to be eligible for the compensation.
          </p>

          <h3>What happened to Trustpad?</h3>
          <p>
            The Trustpad team was composed of anonymous individuals using
            pseudonyms, with Lechiffre as the Founder and Double Trouble as the
            CTO. Unfortunately, Trustpad has not made any sales in the last 6
            months. Neither Lechiffre nor DT has provided any reasons for the
            inactivity, and none of the remaining active team members, including
            myself, know their current whereabouts. There is growing concern
            within the Trustpad community about whether this marks the end of
            the project. I honestly don't know. Only time will tell.
          </p>
          <br />
          <br />
          <p>
            On a separate note, Freepad is an independent project that I built
            from scratch. With over five years of experience in the launchpad
            business, I have gained enough knowledge to tackle the significant
            challenges faced by launchpads, investors, and projects seeking to
            raise funds.
          </p>
          <br />
          <br />
          <p>
            While I am grateful to Trustpad for the opportunity it provided and
            remain committed to its present and future, I must now continue my
            journey with my new venture, Freepad.
          </p>
          <br />
          <br />
          <h3>Partners</h3>
          <p>
            We welcome all SaaS, KOLs, MM, VCs, and all stakeholders into
            Freepad. The benefits are enormous for all our partners. We will be
            having special pools dedicated to our early-stage supporters,
            investors, and partners.
          </p>

          <h3>Team</h3>
          <p>
            Founded by Yongt, a crypto investor and educator, Community Manager
            with Trustpad since 2021.
          </p>
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

export default Documentation;
