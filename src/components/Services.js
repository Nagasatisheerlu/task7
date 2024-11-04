// src/components/Services.js
import React from 'react';
import './Services.css'; // Ensure you have this CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p>At Music Hub, we offer a range of services to elevate your musical experience. Explore our offerings below:</p>
      <ul className="services-list">
        <li className="service-item">
          <span className="service-link">Music Design</span>
          <p className="service-description">Crafting unique soundscapes and compositions tailored to your needs.</p>
        </li>
        <li className="service-item">
          <span className="service-link">Music Development</span>
          <p className="service-description">Helping artists and producers develop their music and reach their full potential.</p>
        </li>
      </ul>

      <div className="service-detail">
        <h3>Service Details</h3>
        <p>Select a service to learn more about what we offer.</p>
      </div>
    </div>
  );
};

export default Services;
