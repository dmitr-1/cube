import React, { useState } from 'react';
import { loginRequest } from '../../effector/storeUser';

export default function ModalAuth({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginRequest(login, password);
    onClose();
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <form encType='multipart/form-data' className='formAuth'>
          <input
            className='inputAuth'
            type='text'
            name='name'
            placeholder='Login'
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            className='inputAuth'
            type='text'
            name='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='button' className='btnBetModal' onClick={handleLogin}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
