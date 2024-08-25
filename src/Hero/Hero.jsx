import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-buttons">
            <a href="#" className="shopnow-button">
              Shop Now
            </a>
            <a href="#" className="category-button">
              Category
            </a>
          </div>
          <div className="availability">
            <p>Also available on</p>
            <img src="public/flipkart.png" alt="Flipkart" />
            <img src="public/amazon.png" alt="Amazon" />
          </div>
        </div>
        <div className="hero-image">
          <img src="public/shoe_image.png" alt="Product Image" />
        </div>
      </section>
    </>
  );
}
