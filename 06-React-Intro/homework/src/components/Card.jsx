import React from "react";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <span>{name}</span>
      <button onClick={onClose}>X</button>
      <div>
        <div>
          <span>Min</span>
          <span> {min}</span>
        </div>
        <div>
          <span>Max</span>
          <span>{max}</span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  );
}
