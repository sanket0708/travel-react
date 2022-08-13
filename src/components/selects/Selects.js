import React from "react";
import "./SelectsStyles.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";
import Maldives3 from "../../assets/maldives3.jpg";

import Selectsimg from "../Selectsimg/Selectsimg";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <Selectsimg bgImg={BoraBora} text="Bora Bora" />
        <Selectsimg bgImg={BoraBora2} text="Emerald Bay" />
        <Selectsimg bgImg={Maldives} text="Maldives" />
        <Selectsimg bgImg={Maldives2} text="Grenada" />
        <Selectsimg bgImg={KeyWest} text="Barbados" />
        <Selectsimg bgImg={Maldives3} text="Key West" />
      </div>
    </div>
  );
}

export default Selects;
