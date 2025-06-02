import React, { useState, useEffect } from "react";
import "./HomePage.css";
import coffee from "../assets/coffee.avif";
import coffeecake from "../assets/coffeecake.jpg";
import sandwhich from "../assets/sandwhich.jpg";

const HomePage = () => {
  const images = [coffee, coffeecake, sandwhich];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <div className="header">
          <h1>Welcome to Our Lovely Coffee store!!!</h1>
        </div>
      </div>

      <div className="shop">
        <div
          className="carousel"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        >
          <h2>
            Come here to have the best drinks, bites and eats on the go 😋
          </h2>
          <p>
            We make all of our food options with precision and joy and
            we would love for you try them and experience that devine taste!
          </p>
          <span>To view some more of our delicious delicacies, click the button below:</span>
          <button>See All</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
