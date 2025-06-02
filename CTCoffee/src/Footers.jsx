import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import './Footers.css'

const Footers = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="footer-info">
        <h2>
          "A café dedicated to delivering more than coffee, but an experience for a life time"
        </h2>
        <h2>
          <Link to={"/contact"}>Contact</Link>
        </h2>
      </div>
    </div>
  );
};

export default Footers;
