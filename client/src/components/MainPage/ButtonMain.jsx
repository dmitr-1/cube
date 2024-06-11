import React, { useState } from 'react';

export default function ButtonMain({ makeBet, typeBtn }) {
  const [activeBtn, setActiveBtn] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (btnType) => {
    if (activeBtn === btnType) {
      setActiveBtn(null);
      typeBtn(null);
    } else {
      setActiveBtn(btnType);
      typeBtn(btnType);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

  return (
    <div className='btnForBet'>
      Варианты ставок
      <div className='firdtBtn'>
        <button
          className={activeBtn === 'even' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('even')}
        >
          Четное
        </button>
        <button
          className={activeBtn === 'odd' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('odd')}
        >
          Нечетное
        </button>
      </div>
      <div className='secondBtn'>
        <button
          className={activeBtn === '1-3' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('1-3')}
        >
          От 1 до 3
        </button>
        <button
          className={activeBtn === '4-6' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('4-6')}
        >
          От 4 до 6
        </button>
      </div>
      <button
        className={activeBtn === inputValue ? 'activebtnStyleNum' : 'btnBetNum'}
        type='submit'
        onClick={() => handleButtonClick({inputValue})}
      >
        Конкретное число
        <input
          type='text'
          className='inpExactNum'
        //   value={inputValue}
          onChange={handleInputChange}
        ></input>
      </button>
      <button className='btnBetToDo' type='submit' onClick={makeBet}>
        Сделать ставку
      </button>
    </div>
  );
}
