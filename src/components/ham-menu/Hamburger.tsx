// import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./hamburger.style.css";
const HamburgerComponent = () => {
  return (
    <div className="hamburger-container">
      <Hamburger size={25} color="hsl(257, 7%, 63%)" />
    </div>
  );
};

export default HamburgerComponent;
