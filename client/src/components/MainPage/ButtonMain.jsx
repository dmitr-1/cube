import React, { useState } from 'react';
import { useUnit } from 'effector-react';
import { updateBet, updateNumCube } from '../../effector/stores';
import { $activeBtn, $playBalace } from '../../effector/stores';
export default function ButtonMain() {
  const typeButton = useUnit($activeBtn);
  const playBalance = useUnit($playBalace);

  const [inpNum, setIntNum] = useState(0);

  const handleButtonClick = (value) => {
    if (value === 'num') {
      updateBet(inpNum);
    } else {
      updateBet(value);
    }
  };

  const handleInputChange = (e) => {
    setIntNum(e.target.value);
  };

  const handleMakeBet = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    updateNumCube(diceResult);
  };

  return (
    <div className='btnForBet'>
      Варианты ставок
      <div className='firdtBtn'>
        <button
          className={typeButton === 'even' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('even')}
          disabled={playBalance <= 0}
        >
          Четное
        </button>
        <button
          className={typeButton === 'odd' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('odd')}
          disabled={playBalance <= 0}
        >
          Нечетное
        </button>
      </div>
      <div className='secondBtn'>
        <button
          className={typeButton === '1-3' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('1-3')}
          disabled={playBalance <= 0}
        >
          От 1 до 3
        </button>
        <button
          className={typeButton === '4-6' ? 'activebtnStyle' : 'btnBet'}
          type='submit'
          onClick={() => handleButtonClick('4-6')}
          disabled={playBalance <= 0}
        >
          От 4 до 6
        </button>
      </div>
      <button
        className={typeButton === inpNum ? 'activebtnStyleNum' : 'btnBetNum'}
        type='submit'
        onClick={() => handleButtonClick('num')}
        disabled={playBalance <= 0}
      >
        Конкретное число
        <input
          type='text'
          className='inpExactNum'
          onChange={handleInputChange}
        ></input>
      </button>
      <button
        className='btnBetToDo'
        type='submit'
        onClick={handleMakeBet}
        disabled={playBalance <= 0}
      >
        Сделать ставку
      </button>
    </div>
  );
}
