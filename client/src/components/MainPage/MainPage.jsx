import React, { useEffect, useState } from 'react';
import bets from './bets';
import ButtonMain from './ButtonMain';
import Cube from './Cube';

export default function MainPage() {
  const [oneBet, setOneBet] = useState(1);
  const [betPlaced, setBetPlaced] = useState(false);
  const [numberCube, setNumberCube] = useState(null);
  console.log('результат функции', numberCube);
  const [result, setResult] = useState(null);
  const [typeBet, setTypeBet] = useState('');
  console.log('данные ставки',typeBet);


  useEffect(() => {
    if (typeBet === 'even' && numberCube % 2 === 0) {
      setResult(`Вы выиграли ${oneBet}`);
    } else if (typeBet === 'odd' && numberCube % 2 !== 0) {
      setResult('Вы выиграли');
    } else if (typeBet === '1-3' && numberCube >= 1 && numberCube <= 3) {
      setResult('Вы выиграли');
    } else if (typeBet === '4-6' && numberCube >= 4 && numberCube <= 6) {
      setResult('Вы выиграли');
    } else if (typeBet === 'inputValue' && numberCube === Number(typeBet)) {
      setResult('Вы выиграли');
    } else {
      setResult('Повезет в следующий раз!');
    }
  }, [betPlaced, typeBet, numberCube, oneBet]);

  const handleMakeBet = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    setNumberCube(diceResult);
    setBetPlaced(true);
  };

  const typeBetBtn = (value) => {
    setTypeBet(value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setOneBet(value);
  };

  return (
    <div className='MainPage'>
      <div className='setBet'>
        {betPlaced ? (
          <div>
            Результат броска кубика: {numberCube}. <div>{result} TND!</div>
          </div>
        ) : (
          'Сделайте ставку'
        )}
      </div>
      <Cube number={numberCube} />
      <label>
        Размер ставки
        <select
          name='selectBet'
          className='selectBet'
          value={oneBet}
          onChange={handleChange}
        >
          {bets.map((bet) => (
            <option key={bet.value} value={bet.value}>
              {bet.label}
            </option>
          ))}
        </select>
      </label>
      <ButtonMain makeBet={handleMakeBet} typeBtn={typeBetBtn} />
    </div>
  );
}
