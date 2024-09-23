import React from "react";
import "./FreshOrganicProducts.css";
import { CiStar } from "react-icons/ci";

const productData = [
  {
    image: require("../../images/bread.png"),
    title: "Bread",
    rating: 5,
    price: 10,
  },
  {
    image: require("../../images/bread.png"),
    title: "Bread",
    rating: 5,
    price: 10,
  },
  {
    image: require("../../images/bread.png"),
    title: "Bread",
    rating: 5,
    price: 10,
  },
  {
    image: require("../../images/bread.png"),
    title: "Bread",
    rating: 5,
    price: 10,
  },
  {
    image: require("../../images/bread.png"),
    title: "Bread",
    rating: 5,
    price: 10,
  },
  {
    image: require("../../images/bread.png"),
    title: "Bread",
    rating: 5,
    price: 10,
  },
];

const FreshOrganicProducts = () => {
  return (
    <div className="fresh-organic-products">
      <div class="heading">
        <h1>Fresh Organic Products</h1>
        <div className="underline" />
      </div>
      <div className="sections">
        <div className="left-section">
          <img
            src={require("../../images/fresh_juice.png")}
            alt="Fresh Juice"
          />
          <div className="overlay">
            <h1>Fresh Juice <br/>100% Organic</h1>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="right-section">
          <div className="product-grid">
            {productData.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.title} />
                <div className="product-description">
                  <h3>{product.title}</h3>
                  <div className="rating">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <CiStar key={i} style={{color: "#ffb74d"}} />
                    ))}
                  </div>
                  <p style={{ color: "#2ea87d", fontWeight: "bold"}}>₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshOrganicProducts;
