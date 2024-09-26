import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Naslovna from '/src/Components/Pages/Naslovna.jsx';
import Ples from '/src/Components/Pages/Ples.jsx'; // Uvezi Ples komponentu
import Mladenci from '/src/Components/Pages/Mladenci.jsx';
import Rodendan from './Components/Pages/Rodendan.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/Evushka">
      <Routes>
        <Route path="/" element={<Naslovna />} />
        <Route path="/ples" element={<Ples />} />
        <Route path="/kutakZaMladence" element={<Mladenci />} />
        <Route path="/rođendani" element={<Rodendan />} />
        {/* Dodaj ostale rute ovdje */}
      </Routes>
    </Router>
  </StrictMode>
);
