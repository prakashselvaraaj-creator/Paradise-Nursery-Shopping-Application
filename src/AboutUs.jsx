import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-description">
        Welcome to <strong>e-plantShopping</strong>, where green meets serenity! 
        Our mission is to provide the best house plants for your home and lifestyle.
      </p>
      <p className="about-us-description">
        At <strong>e-plantShopping</strong>, we believe that plants are more than just decoration —
        they are living companions that breathe life, colour, and calm into every space.
        Founded with a passion for botanical beauty, we hand-select each plant in our collection
        to ensure it arrives at your door healthy, vibrant, and ready to thrive.
      </p>
      <p className="about-us-description">
        From dramatic tropical statement pieces to effortless low-maintenance greens and
        sculptural succulents, our curated range has something for every home, every lifestyle,
        and every green thumb — whether seasoned or just starting out.
      </p>
      <div className="about-values">
        <div className="about-value">
          <span className="about-value-icon">🌱</span>
          <span className="about-value-label">Sustainably Sourced</span>
        </div>
        <div className="about-value">
          <span className="about-value-icon">📦</span>
          <span className="about-value-label">Safely Packaged</span>
        </div>
        <div className="about-value">
          <span className="about-value-icon">🚚</span>
          <span className="about-value-label">Free Shipping Over $50</span>
        </div>
        <div className="about-value">
          <span className="about-value-icon">💚</span>
          <span className="about-value-label">Plant Happiness Guarantee</span>
        </div>
      </div>
      <p className="about-us-repo">
        View our project on <a href="https://github.com/prakashselvaraaj-creator/e-plantShopping" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </div>
  );
}



