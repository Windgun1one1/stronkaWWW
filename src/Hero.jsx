import React from "react";

const Hero = ({ onClick}) => (
  <div className="hero">
    <div className="hero-content">
      <h1>Rozpocznij swoją przygodę z nauką</h1>
      <p>Odkryj setki kursów online i rozwijaj się w wybranych przez siebie dziedzinach</p>
      <button className="scroll-button" onClick={onClick}>Zobacz kursy ↓</button>
    </div>
  </div>
);

export default Hero;
