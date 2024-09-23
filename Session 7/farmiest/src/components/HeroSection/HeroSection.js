import React from "react";
import "./HeroSection.css";
import heroImage from "../../images/hero_image.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div>
        <div className="text-vertical">Organic</div>
        <div className="hero-text">
          <h1>
            Live on <span className="highlight">fruits & vegetables</span> to
            live Healthy
          </h1>
          <p className="bold">100% Healthy & Fresh</p>
          <div className="underline"></div>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="background-color"></div>
        <img src={heroImage} alt="groceries" />
      </div>
    </div>
  );
};

export default HeroSection;


