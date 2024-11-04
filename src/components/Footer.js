// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <div className="container">
        <p>© 2024 Music Hub. All rights reserved.</p>
        <div>
          <a href="#" className="text-light">Facebook</a>
          {' | '}
          <a href="#" className="text-light">Twitter</a>
          {' | '}
          <a href="#" className="text-light">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
