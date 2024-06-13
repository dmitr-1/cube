import React from 'react';

import { useUnit } from 'effector-react';
import { $playBalace } from '../../effector/stores';

export default function StartBalance() {
  const playBalance = useUnit($playBalace);

  return (
    <div>
      <div>
        {playBalance <= 0
          ? 'Ваш баланс 0, игра окончена'
          : `Ваш баланс: ${playBalance}`}
      </div>
    </div>
  );
}
