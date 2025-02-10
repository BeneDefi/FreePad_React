import React from "react";

const IDOSection = () => {
  return (
    <section className="IDOs">
      <div id="ido-btn-container">
        <button className="ido-btn">Upcoming [0]</button>
        <button className="ido-btn">Ended [0]</button>
        <button className="ido-btn">My Participation [0]</button>
        <button className="ido-btn">Memes [0]</button>
        <button className="ido-btn">AI agents [0]</button>
        <button className="ido-btn">utilities [0]</button>
      </div>
      <div className="Klass">
        <div className="class">
          <select
            style={{
              width: "150px",
              height: "50px",
              cursor: "pointer",
              background: "transparent",
              border: "0.5px solid navy",
              color: "#188ab8",
              textAlign: "center",
            }}
            id="select-chain"
          >
            <option value="">any chain</option>
            <option value="">Polygon</option>
            <option value="">Zksync</option>
            <option value="">Ethereum</option>
            <option value="">Arbitrum</option>
            <option value="">BNB chain</option>
            <option value="">Solana</option>
            <option value="">Phantom Opera</option>
            <option value="">Terra</option>
            <option value="">Base</option>
          </select>
        </div>
        <div className="search">
          <input
            style={{
              padding: "10px",
              height: "50px",
              cursor: "pointer",
              background: "transparent",
              border: "0.5px solid navy",
              color: "#188ab8",
              textAlign: "center",
            }}
            id="search-token"
            placeholder=" &#128269; search by name, token"
            type="text"
          />
        </div>
      </div>

      <div id="projects" className="projects">
        <h2>Upcoming IDO</h2>
        <div className="project-grid">
          <div data-aos="flip-up" className="project-card">
            <h3>Coming soon!</h3>
          </div>
          <div data-aos="flip-up" className="project-card">
            <h3>Coming soon!</h3>
          </div>
          <div data-aos="flip-up" className="project-card">
            <h3>Coming soon!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDOSection;
