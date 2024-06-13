import React, { useEffect, useState } from 'react';
import bets from './bets';
import ButtonMain from './ButtonMain';
import Cube from './Cube';
import StartBalance from './StartBalance';
import { useUnit } from 'effector-react';
import {
  $numberCube,
  $numberBetNote,
  $activeBtn,
  $playBalace,
} from '../../effector/stores';
import { updatenumberBet, updateBalance } from '../../effector/stores';

export default function MainPage() {
  const [result, setResult] = useState(null);
  const [gameOver, setGameOver] = useState(null);

  const number = useUnit($numberCube);
  const resultPrice = useUnit($numberBetNote);
  console.log('цифра ставки==>', typeof parseInt(resultPrice));
  const typeButton = useUnit($activeBtn);
  const playBalance = useUnit($playBalace);
  console.log('==========>', typeof playBalance);

  useEffect(() => {
    // const timeout = setTimeout(() => {
    if (typeButton === 'even' && number % 2 === 0) {
      setResult('Вы выиграли');
    } else if (typeButton === 'odd' && number % 2 !== 0) {
      setResult('Вы выиграли');
    } else if (typeButton === '1-3' && number >= 1 && number <= 3) {
      setResult('Вы выиграли');
    } else if (typeButton === '4-6' && number >= 4 && number <= 6) {
      setResult('Вы выиграли');
    } else if (parseInt(typeButton) && parseInt(typeButton) === number) {
      setResult('Вы выиграли');
    } else {
      setResult('Повезет в следующий раз!');
    }
    // }, 3000);

    // return () => clearTimeout(timeout);
  }, [typeButton, number, playBalance, resultPrice]);

  //! проблема
  useEffect(() => {
    if (playBalance <= 0) {
      setGameOver('баланс пустой');
    }
    if (result === 'Повезет в следующий раз!' && playBalance >= 0) {
      const newBalance = playBalance - resultPrice;
      updateBalance(newBalance);
    } else if (result === 'Вы выиграли' && playBalance >= 0) {
      const newBalance = playBalance + parseInt(resultPrice);
      updateBalance(newBalance);
    }
  }, [result]);

  const handleChange = (e) => {
    const { value } = e.target;
    updatenumberBet(value);
  };

  return (
    <div className='MainPage'>
      <StartBalance />
      <div className='setBet'>
        {number ? (
          <div>
            Результат броска кубика: {number}.{' '}
            <div>
              {result} {resultPrice} TND!
            </div>
          </div>
        ) : (
          'Сделайте ставку'
        )}
      </div>

      <Cube />

      <label>
        Размер ставки
        <select name='selectBet' className='selectBet' onChange={handleChange}>
          {bets.map((bet) => (
            <option key={bet.value} value={bet.value}>
              {bet.label}
            </option>
          ))}
        </select>
      </label>
      <ButtonMain />
    </div>
  );
}
