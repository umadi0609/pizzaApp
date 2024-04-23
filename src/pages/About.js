import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to House of Pizza, where our love for pizza is as deep as our commitment to quality.
        Our journey began with a simple passion for crafting the perfect pizza—delicious, flavorful,
        and made with the utmost care. At the heart of our mission is a dedication to using only the finest
        and freshest ingredients, ensuring that every bite is a delightful experience. Our skilled chefs bring an
        artisanal touch to every pizza, from the hand-tossed crust to the carefully selected toppings. We take pride
        in our role within the local community, supporting local farmers and businesses to bring you the best of what
        our region has to offer. As a team, we believe in not just making pizzas but creating memorable moments for 
        you and your loved ones. Explore our menu to discover a variety of specialty pizzas, each telling its own
        unique story. Join us on this delicious journey, and let House of Pizza be your go-to 
        destination for exceptional pizza crafted with love and dedication.
        </p>
      </div>
    </div>
  );
}

export default About;
