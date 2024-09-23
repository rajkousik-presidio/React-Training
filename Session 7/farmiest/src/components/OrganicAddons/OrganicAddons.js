import React from "react";
import "./OrganicAddons.css";
import organic1 from "../../images/organic1.png";
import organic2 from "../../images/organic2.png";
import organic3 from "../../images/organic3.png";
import organic4 from "../../images/organic4.png";
import organic5 from "../../images/organic5.png";
import organic6 from "../../images/organic6.png";
import organic7 from "../../images/organic7.png";
import organic8 from "../../images/organic8.png";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const OrganicAddons = () => {
  const products = [
    { id: 1, image: organic1, name: "Chips", price: 10, category: "Breakfast" },
    {
      id: 2,
      image: organic2,
      name: "Side Dish",
      price: 8,
      category: "Breakfast",
    },
    {
      id: 3,
      image: organic3,
      name: "Bread",
      price: 7.5,
      category: "Breakfast",
    },
    {
      id: 4,
      image: organic4,
      name: "Bolthouse",
      price: 100,
      category: "Breakfast",
    },
    { id: 5, image: organic5, name: "Chips", price: 10, category: "Breakfast" },
    {
      id: 6,
      image: organic6,
      name: "Side Dish",
      price: 8,
      category: "Breakfast",
    },
    {
      id: 7,
      image: organic7,
      name: "Bread",
      price: 7.5,
      category: "Breakfast",
    },
    {
      id: 8,
      image: organic8,
      name: "Bolthouse",
      price: 100,
      category: "Breakfast",
    },
  ];

  return (
    <div className="organic-addons">
      <div class="heading">
        <h1>New Organic Add-ons</h1>
        <div className="underline" />
      </div>
      <div className="categories">
        <button className="active">Breakfast</button>
        <button>Fruits</button>
        <button>Salads</button>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <div className="grp">
                <p>₹ {product.price}</p>
                <span>
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />{" "}
                </span>
              </div>
              <div className="product-actions">
                <button>Add to Cart<FaArrowRightLong style={{marginLeft:"5px"}} /></button>
                <div className="actions">
                  <button>
                    <CiHeart />
                  </button>
                  <button>
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicAddons;
