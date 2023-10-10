import React from 'react';
import { FaInstagram, FaDiscord, FaGithubSquare } from "react-icons/fa";
import bannergreen from '../../assets/bannergreen.jpg'


function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${bannergreen})` }}>
      <div className="footer-left">
        <p className="footer-text">&copy; 2023 John Magnuson Jr.</p>
      </div>
      <div className="footer-center">
        <a href="https://www.instagram.com/sobewon" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon"/>
        </a>
        <a href="https://discordapp.com/users/170044676869455872" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="footer-icon"/>
        </a>
        <a href="https://github.com/sobewon" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="footer-icon"/>
        </a>
      </div>
      <div className="footer-right">
        <p className="footer-text">Never Back Down</p>
      </div>
    </footer>
  );
};

export default Footer;