import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="about-us">
          <div className="name">
            <h1>Farmiest!</h1>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            enim volutpat tristique urna. Diam, id vitae adipiscing purus magna
            dapibus ipsum urna sed.
          </div>
          <div className="social-links">
            <div className="social-link">
              <FaFacebook />
            </div>
            <div className="social-link">
              <FaTwitter />
            </div>
            <div className="social-link">
              <FaInstagram />
            </div>
            <div className="social-link">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="link-section">
          <div className="heading">
            <h2>Link</h2>
          </div>
          <div className="links">
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span>My account</span>
            </div>
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span> Checkout </span>
            </div>
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span>Wishlist</span>
            </div>
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
        <div className="information-section">
          <div className="heading">
            <h2>Information</h2>
          </div>
          <div className="links">
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span className="link-name">About Us</span>
            </div>
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span className="link-name"> Our Team </span>
            </div>
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span className="link-name">Contact Us</span>
            </div>
            <div className="link">
              <MdOutlineKeyboardArrowRight />
              <span className="link-name">Blog</span>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div className="name">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-links">
            <div className="contact-link">
              <FaLocationDot className="contact-icon" />
              <span>1234 North Avenue , South West, IN 360001</span>
            </div>
            <div className="contact-link">
              <IoMdMail className="contact-icon"/>
              <span>jondoe@farmiest.com</span>
            </div>
            <div className="contact-link">
              <FaPhoneFlip className="contact-icon"/>
              <span>+0123456789</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hr" />
      <div className="copyrights">
        Copyright 2021 Farmiest All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
