import React from "react";
import "./SelectsimgStyles.css";
import BoraBora from "../../assets/borabora.jpg";

function Selectsimg({ bgImg, text }) {
  return (
    <div className="selects-location">
      <img src={bgImg} alt="/" />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Selectsimg;
