import React from 'react';
import { useUnit } from 'effector-react';
import { $numberCube } from '../../effector/stores';

export default function Cube() {
  const number = useUnit($numberCube);

  console.log('из стора число кубика', number);

  let cubeImage;

  switch (number) {
    case 1:
      cubeImage = '/imgCube/1.JPG';
      break;
    case 2:
      cubeImage = '/imgCube/2.JPG';
      break;
    case 3:
      cubeImage = '/imgCube/3.JPG';
      break;
    case 4:
      cubeImage = '/imgCube/4.JPG';
      break;
    case 5:
      cubeImage = '/imgCube/5.JPG';
      break;
    case 6:
      cubeImage = '/imgCube/6.JPG';
      break;
    default:
      cubeImage = '/imgCube/6.JPG'; 
  }

  return (
    <div className='gameCube'>
      <img src={cubeImage} alt='cube' className='cubeSize' />
    </div>
  );
}
