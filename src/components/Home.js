// src/components/Home.js
import React from 'react';
import './Home.css';
import musicBanner from '../assets/music-banner.jpg'; // Adjust the path if necessary

const Home = () => {
    return (
        <div className="container text-center">
            <h2>Welcome to Musicaa!</h2>
            <img src={musicBanner} alt="Music Banner" className="img-fluid" />
            <p>Your one-stop destination for all things music!</p>
        </div>
    );
};

export default Home;
