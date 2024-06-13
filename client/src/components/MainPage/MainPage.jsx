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

  const number = useUnit($numberCube);
  const resultPrice = useUnit($numberBetNote);
 
  const typeButton = useUnit($activeBtn);
  const playBalance = useUnit($playBalace);
 

  useEffect(() => {
    if (
      (typeButton === 'even' && number % 2 === 0) ||
      (typeButton === 'odd' && number % 2 !== 0) ||
      (typeButton === '1-3' && number >= 1 && number <= 3) ||
      (typeButton === '4-6' && number >= 4 && number <= 6)
    ) {
      setResult(`Вы выиграли ${parseInt(resultPrice) * 2} TND!`);
      const newBalance = playBalance + parseInt(resultPrice) * 2;
      updateBalance(newBalance);
    } else if (parseInt(typeButton) && parseInt(typeButton) === number) {
      setResult(`Вы выиграли ${parseInt(resultPrice) * 3} TND!`);
      const newBalance = playBalance + parseInt(resultPrice) * 3;
      updateBalance(newBalance);
    } else {
      setResult('Повезет в следующий раз!');
      const newBalance = playBalance - resultPrice;
      updateBalance(newBalance);
    }
  }, [number]);

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
            <div style={{ fontSize: '15px', textAlign: 'center' }}>
              {result}
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
