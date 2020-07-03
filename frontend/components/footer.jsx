import React from "react";

const Footer = props => (
    <footer className="footer-main">
        <div className="footer-left">
            <p className="footer-text">Spaceflix is a pixel-perfect clone of Netflix built by Ezra Hecker.</p>
        </div>
        <div className="footer-right">
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.github.com/ehecker"><div className="github-icon"></div></a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ezra-hecker-a9796411a/"><div className="linkedin-icon"></div></a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://angel.co/u/ezra-hecker"><div className="angellist-icon"></div></a>
        </div>
    </footer>
)

export default Footer;