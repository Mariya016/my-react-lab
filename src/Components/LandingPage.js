import React from 'react';
import '../styles/landingpage.css';

function LandingPage() {  
    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to Cosmetic City</h1> 
            <p className="landing-subtitle">
                Best Deals and Best Products!
            </p>
            <button className="landing-button">
                Learn More
            </button>
        </div>
    );
}

export default LandingPage;
