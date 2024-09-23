// src/components/WhatOurCustomersSay.js
import React from "react";
import { ImQuotesRight } from "react-icons/im";
import "./WhatOurCustomerSay.css"; // Create a CSS file for styling

const testimonials = [
  {
    image: require("../../images/user1.png"), // Replace with actual image paths
    name: "Olivia Dunham",
    role: "FBI Special Agent",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.",
  },
  {
    image: require("../../images/user2.png"), // Replace with actual image paths
    name: "Walter Bishop",
    role: "Eccentric Researcher",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.",
  },
  {
    image: require("../../images/user3.png"), // Replace with actual image paths
    name: "Phillip Broyles",
    role: "Special Agent",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.",
  },
];

const WhatOurCustomersSay = () => {
  return (
    <div className="testimonials">
      <div class="heading">
        <h1>What Our Customer Say</h1>
        <div className="underline" />
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="description">
              <p>{testimonial.feedback}</p>
              <span>
                <ImQuotesRight />
              </span>
            </div>

            <div className="user-info">
              <div className="details">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
              <div className="user-image">
                <img src={testimonial.image} alt="User" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="swipe">
        <div className="swipe-underline active"></div>
        <div className="swipe-underline"></div>
        <div className="swipe-underline"></div>
        <div className="swipe-underline"></div>
      </div>
    </div>
  );
};

export default WhatOurCustomersSay;
