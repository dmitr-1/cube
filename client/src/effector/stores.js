import { createStore, createEvent } from 'effector';

//! значение кнопок
export const updateBet = createEvent();
export const $activeBtn = createStore(null).on(updateBet, (_, value) => value);

//! рандомное значение кубика
export const updateNumCube = createEvent();
export const $numberCube = createStore(null).on(
  updateNumCube,
  (_, newState) => newState
);

//! записываю цифру ставки
export const updatenumberBet = createEvent();
export const $numberBetNote = createStore(null).on(
  updatenumberBet,
  (_, newState) => newState
);

//! Баланс средств игры
export const updateBalance = createEvent();
export const $playBalace = createStore(100).on(
  updateBalance,
  (_, newState) => newState
);
