import React from 'react';
import './FreshVegSection.css';
import freshVeg from '../../images/fresh_veg.png';
import { FaPlay } from 'react-icons/fa';

const FreshVegSection = () => {
  return (
    <div className="fresh-veg-section">
      <img src={freshVeg} alt="Fresh Vegetables" className="fresh-veg-image" />
      <div className="overlay">
        <h2>EveryDay Fresh & Cream</h2>
        <div className="play-button">
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default FreshVegSection;
