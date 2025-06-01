import React from "react";
import "./HomePage.css";
import coffee from "../assets/coffee.jpg";
import coffeecake from "../assets/coffeecake.jpeg";
import sandwhich from "../assets/sandwhich.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="header">
          <h1>Welcome to Our Lovely Coffee store!!!</h1>
        </div>
      </div>
      <div className="shop">
        <h2>Come here to have the best drinks, bites and eats on the go 😋</h2>
        <p>
          We make every single one of our food options with love and joy and we
          would love for you try them and experience that same love!
        </p>
        <span>View some of our best sellers below:</span>
        <div className="food">
          <img src={coffee} width={250} height={250} />
          <img src={coffeecake} width={250} height={250} />
          <img src={sandwhich} width={250} height={250} />
        </div>
        <button>See All</button>
      </div>
    </div>
  );
};

export default HomePage;
