import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hjem from './pages/Hjem/Hjem.jsx';
import Advokatrerne from './pages/Advokaterne/Advokaterne.jsx'
import Omleolov from './pages/Omleolov/Omleolov.jsx';
import Kontakt from './pages/Kontakt/Kontakt.jsx'; 
import Navbar from './components/Navbar.jsx';
import Fallback from './pages/Fallback/Fallback.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="advokatrerne" element={<Advokatrerne />} />
        <Route path="omleolov" element={<Omleolov />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="*" element={<Fallback />} />
        <Route path="navbar" element={<Navbar/>} />
      </Routes>
    </div>
  );
}

export default App