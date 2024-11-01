import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:m.b.t.aditya5234@gmail.com" className='mail'><FaEnvelope className="icon"/> <p>m.b.t.aditya5234@gmail.com</p></a>
          <a href="https://linkedin.com"><FaLinkedin className="icon"/></a>
          <a href="https://twitter.com"><FaTwitter className="icon"/> </a>
          <a href="https://instagram.com"><FaInstagram className="icon"/></a>
        </div>
        
        <div className="footer-nav">
          <a href="#join-us">Join Us</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#premiums">Premiums+</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
      <hr className="footer-line" /> {/* Horizontal line */}
      <div className="footer-bottom">
        <p>Project by Aditya B Tiwari</p>
      </div>
    </footer>
  );
};

export default Footer;
