import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Reservations from './components/Reservations';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Reservations" element={<Reservations />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
