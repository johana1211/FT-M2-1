import React from 'react';
import style from './Search.module.css'; 

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div>
    <input className={style.inp} type='text' placeholder='Ciudad...'/>
    <button className={style.btn}onClick={()=> onSearch('Ciudad')}>Agregar</button>

  </div>
};