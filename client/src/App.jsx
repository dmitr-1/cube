import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import './App.scss';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes> */}
      <MainPage />
      {/* </Routes> */}
    </>
  );
}

export default App;
