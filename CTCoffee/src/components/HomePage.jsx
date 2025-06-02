import React from "react";
import "./HomePage.css";
import Hero from "./Hero";
import Shop from "./Shop";

const HomePage = () => {

  return (
    <div className="home">
      <Hero />
      <Shop />
    </div>
  );
};

export default HomePage;
