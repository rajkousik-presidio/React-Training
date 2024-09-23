import React from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaGlobe,
} from "react-icons/fa";
import "./Navbar.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Farmiest!</div>
      <ul className="navbar-links">
        <li className="active">Home</li>
        <li>
          Store
          <MdOutlineKeyboardArrowDown style={{ verticalAlign: "middle" }} />
        </li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="navbar-icons">
        <div className="grp-no-right-border">
          <FaMapMarkerAlt />
        </div>
        <div className="grp">
          <FaSearch />
        </div>
        <div className="flex-gap">
          <div className="grp">
            <FaUser /> Account
          </div>
          <div className="grp">
            <FaShoppingBag className="" /> Bag
          </div>
          <div className="grp">
            <FaGlobe />{" "}
            <span style={{ fontWeight: "bold" }}>
              EN
              <MdOutlineKeyboardArrowDown style={{ verticalAlign: "middle" }} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
