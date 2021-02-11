import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <span className='img'><img className='img' src={Logo} alt='imagen no encontrada'/></span>
      <p className="btn"><SearchBar onSearch={onSearch}/></p>
    </div>
  );
};

export default Nav;
