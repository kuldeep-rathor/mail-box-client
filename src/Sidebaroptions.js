import React from "react";
import "./css/sidebaroptions.css"

const Sidebaroptions = ({ Icon, title, number , isactive }) => {
  return (
  <div className={`sidebaroptions ${isactive && `sidebaroptions--active`}`}>
    <Icon/>
    <h2>{title}</h2>
    <p>{number}</p>
  </div>
  )
};

export default Sidebaroptions;
