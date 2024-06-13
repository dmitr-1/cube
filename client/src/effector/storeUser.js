import { createStore, createEvent } from 'effector';

export const loginUser = createEvent();

export const $userData = createStore(null).on(
  loginUser,
  (_, userData) => userData
);

export const loginRequest = async (login, password) => {
  const response = await fetch(
    'https://api.lettobet.dev.bet4skill.com/api/client-login',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ login, password }),
    }
  );

  const userData = await response.json();
  loginUser(userData);
};

loginUser.watch(userData => console.log('юзер:', userData));