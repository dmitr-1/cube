import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'effector-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import { $activeBtn } from './effector/stores.js';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider value={{ $activeBtn }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);
