import React from 'react';
import  style  from './Card.module.css'; 

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    
      
      <div className={style.card}>
        <button className={style.boton }onClick={onClose}>X</button>
          <h5 className={style.name}>{name}</h5>
            <div className={style.container}>
              <div>
              <p>Min</p>
                  <p>{min}</p>
              </div>
                <div>
                <p className={style.max}>Max</p>
                  <p>{max}</p>
                </div>
              <div>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
          </div>
        </div>
      </div>
  );
}
  
/*
display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    

   display: flex;
   flex-direction: column;
   width: 280px;
   border: 2px solid black;
   border-radius: 15px;
   background-color: lightgray
   */

  