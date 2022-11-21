import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="icons-footer">
        <a
          href="https://github.com/antonioWingert"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/antoniobrunowingert/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        Antonio Bruno Wingert ©
      </div>
      <div className="trybe-container">
        <p className="trybe-text">Trybe 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
