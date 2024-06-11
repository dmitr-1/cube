import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbarBtnGrey'>Test Game</div>
        <div className='btnReg'>
          <button className='navbarBtnReg' type='button'>
            Вход
          </button>
          <button className='navbarBtnReg' type='button'>
            Регистрация
          </button>
        </div>
      </nav>
    </div>
  );
}
