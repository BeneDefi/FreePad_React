import React from 'react';

function Home (){
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
                    <i className="fa-solid fa-bars hamburg" onClick={() => {}}></i>
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
                    <i className="fa-solid fa-xmark cancel" onClick={() => {}}></i>
                </div>
            </nav>

            <main>
                <div>
                    <div className="hero">
                        <div className="typewriter">
                            <span className="typewriter-text"></span>
                            <label style={{ color: 'white' }}>|</label>
                        </div>
                        <div className="hero-content">
                            <p>Revolutionizing Decentralized Fundraising.</p>
                            <div className="hero-buttons">
                                <button className="btn-primary">NFT MINTING COMING SOON!!!</button>
                            </div>
                        </div>
                    </div>
                </div>

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
                            <select style={{ width: '150px', height: '50px', cursor: 'pointer', background: 'transparent', border: '0.5px solid navy', color: '#188ab8', textAlign: 'center' }} id="select-chain">
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
                            <input style={{ padding: '10px', height: '50px', cursor: 'pointer', background: 'transparent', border: '0.5px solid navy', color: '#188ab8', textAlign: 'center' }} id="search-token" placeholder=" &#128269; search by name, token" type="text" />
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

                <section id="how-it-works" className="how-it-works">
                    <h2>How FreePad Works</h2>
                    <div data-aos="zoom-in" className="steps">
                        <div className="step">
                            <a href="#">
                                <i className="fa-solid fa-wallet"></i>
                                <h3>Mint NFT</h3>
                                <h4>Mint a one-time access NFT</h4>
                            </a>
                        </div>
                        <div data-aos="zoom-in" className="step">
                            <a href="#">
                                <i className="fa-solid fa-rocket"></i>
                                <h3>Connect Wallet</h3>
                                <h4>Join IDOs</h4>
                            </a>
                        </div>
                        <div data-aos="zoom-in" className="step">
                            <a href="#">
                                <i className="fa-solid fa-chart-line"></i>
                                <h3>Join IDOs</h3>
                                <h4>Join IDOs of your choice</h4>
                            </a>
                        </div>
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
}

export default Home;