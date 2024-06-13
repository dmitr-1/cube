import React from 'react';
import { useUnit } from 'effector-react';
import { $numberCube, $playBalace } from '../../effector/stores';

export default function Cube() {
  const playBalance = useUnit($playBalace);
  const number = useUnit($numberCube);

  let cubeImage;

  if (number === 1) {
    cubeImage = '/imgCube/1.JPG';
  } else if (number === 2) {
    cubeImage = '/imgCube/2.JPG';
  } else if (number === 3) {
    cubeImage = '/imgCube/3.JPG';
  } else if (number === 4) {
    cubeImage = '/imgCube/4.JPG';
  } else if (number === 5) {
    cubeImage = '/imgCube/5.JPG';
  } else if (number === 6) {
    cubeImage = '/imgCube/6.JPG';
  } else {
    cubeImage = '/imgCube/8.gif';
  }

  return (
    <div className='gameCube'>
      {playBalance <= 0 ? (
        <div style={{ textAlign: 'center' }}>
          <img src='/imgCube/8.gif' alt='cube' className='cubeSize' />
          <div>GAME OVER</div>
        </div>
      ) : (
        <img src={cubeImage} alt='cube' className='cubeSize' />
      )}
    </div>
  );
}
