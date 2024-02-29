import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
    <p></p>
    <div className="social-links">
      <a href="https://github.com/Bilalk789" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> GitHub
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
      <a href="/contact" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i> Contact
      </a>
    </div>
  </footer>
);
}

export default Footer;
