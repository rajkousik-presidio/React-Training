import React from "react";
import "./InfoSection.css";
import Salad from "../../images/salad.png";
import Cart from "../../images/cart.png";
import Grocery from "../../images/grocery.png";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-item">
        <img src={Grocery} className="icon" alt="Grocery"/>
        <div className="info">
            <h3>Grocery</h3>
            <p>Fresh grocery delivered</p>
        </div>
      </div>
      <div className="info-item">
        <img src={Salad} className="icon" alt="Salad" />
        <div className="info">
          <h3>Salads</h3>
          <p>Order nutritious salads</p>
        </div>
      </div>
      <div className="info-item">
        <img src={Cart} className="icon" alt="Cart Value"/>
        <div className="info">
          <h3>Cart Value</h3>
          <p>Cart value review your cart</p>
        </div>
      </div>
      <div className="info-item">
        <img src={Grocery} className="icon" alt="Grocery"/>
        <div className="info">
          <h3>Grocery</h3>
          <p>Fresh grocery delivered</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
