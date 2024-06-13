import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/navbar/Navbar';
import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
