import React from "react";

const Footer = props => (
    <footer className="footer-main">
        <div className="footer-left">
            <p className="footer-text">Spaceflix is a pixel-perfect clone of Netflix built by Ezra Hecker.</p>
        </div>
        <div className="footer-right">
            <a className="footer-link" target="_blank" href="https://www.github.com/ehecker"><i className="fab fa-github fa-2x"></i></a>
            <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/ezra-hecker-a9796411a/"><i className="fab fa-linkedin fa-2x"></i></a>
            <a className="footer-link" target="_blank" href="https://angel.co/u/ezra-hecker"><i className="fab fa-angellist fa-2x"></i></a>
        </div>
    </footer>
)

export default Footer;