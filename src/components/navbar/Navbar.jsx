import React, { useState } from 'react';
import ModalAuth from '../Auth/ModalAuth.jsx';
import { useUnit } from 'effector-react';
import { $userData } from '../../effector/storeUser';
import { $playBalace } from '../../effector/stores';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const userData = useUnit($userData);
  const playBalance = useUnit($playBalace);
  return (
    <div>
      <nav className='navbar'>
        <div className='navbarBtnGrey'>Test Game</div>
        {userData ? (
          <div>
            {playBalance <= 0 ? (
              <div className='navBalance'>Ваш баланс 0, игра окончена</div>
            ) : (
              <div className='navBalance'>Ваш баланс: {playBalance} (TND)</div>
            )}
          </div>
        ) : (
          <div className='btnReg'>
            <button
              className='navbarBtnReg'
              type='submit'
              onClick={() => openModal()}
            >
              Вход
            </button>
            <button
              className='navbarBtnReg'
              type='submit'
              onClick={() => openModal()}
            >
              Регистрация
            </button>
          </div>
        )}
      </nav>
      {isModalOpen && <div className='overlay' />}
      <ModalAuth isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
