import React from "react";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'
import "./Navs.css";

const Navs = () => {
  return (
    <div className="navs">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="nav-links">
        <h2>
          <Link to={"/"}>Home</Link>
        </h2>
        <h2>
          <Link to={"/shop"}>Shop</Link>
        </h2>
        <h2>
          <Link to={"/reviews"}>Reviews</Link>
        </h2>
        <h2>
          <Link to={"/contact"}>Contact</Link>
        </h2>
      </div>
    </div>
  );
};

export default Navs;
