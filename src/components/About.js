// src/components/About.js
import React from 'react';
import './About.css'; // Ensure you create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Music Hub</strong>, your ultimate destination for exploring the vibrant world of music.
      </p>
      <img src={require('../assets/music-about.jpg')} alt="Music Scene" className="about-image" />
      <h3>Our Mission</h3>
      <p>
        At Music Hub, we are dedicated to bringing you the best in music from various genres, cultures, and artists.
        Our mission is to connect music lovers with the sounds that inspire them and to create a community of
        like-minded individuals.
      </p>
      <h3>What We Offer</h3>
      <ul>
        <li>Exclusive music recommendations</li>
        <li>Artist spotlights and interviews</li>
        <li>Live events and performances</li>
        <li>A community for music enthusiasts to share their passion</li>
      </ul>
      <h3>Join Us!</h3>
      <p>
        Whether you’re a casual listener or a die-hard fan, there’s something for everyone at Music Hub. Join us as we
        explore the rich tapestry of sound and celebrate the joy of music!
      </p>
    </div>
  );
};

export default About;
