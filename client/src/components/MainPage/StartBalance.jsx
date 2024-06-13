import React from 'react';

import { useUnit } from 'effector-react';
import { $playBalace } from '../../effector/stores';

export default function StartBalance() {
  const playBalance = useUnit($playBalace);

  return (
    <div>
      <div>
        {playBalance <= 0 ? (
          <div>Ваш баланс 0, игра окончена</div>
        ) : (
          <div>Ваш баланс: {playBalance}</div>
        )}
      </div>
    </div>
  );
}
