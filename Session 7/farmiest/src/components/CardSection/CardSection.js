import React from 'react';
import './CardSection.css';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card">
        <img src={food1} alt="Vegetables" />
        <h3>Organics</h3>
        <h2>Vegetables</h2>
        <button>Shop Now</button>
      </div>
      <div className="card">
        <img src={food2} alt="Fresh Food" />
        <h3>Flat 30% off</h3>
        <h2>Fresh Food</h2>
        <button>Shop Now</button>
      </div>
      <div className="card">
        <img src={food3} alt="Super Salads" />
        <h3>Gluten-free</h3>
        <h2>Super Salads</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default CardSection;
