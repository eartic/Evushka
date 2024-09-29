import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Naslovna from '/src/Components/Pages/Naslovna.jsx';
import Ples from '/src/Components/Pages/Ples.jsx';
import Mladenci from '/src/Components/Pages/Mladenci.jsx';
import Rodendan from './Components/Pages/Rodendan.jsx';
import Cuvaonica from './Components/Pages/Cuvaonica.jsx';
import Najam from './Components/Pages/Najam.jsx';
import Pravilnik from './Components/Pages/Pravilnik.jsx';
import Kontakt from './Components/Pages/Kontakt.jsx';

import ScrollToTop from './ScrollToTop'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/Evushka">
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Naslovna />} />
        <Route path="/ples" element={<Ples />} />
        <Route path="/kutakZaMladence" element={<Mladenci />} />
        <Route path="/rođendani" element={<Rodendan />} />
        <Route path="/jutarnjaČuvaonicaZaDjecu" element={<Cuvaonica />} />
        <Route path="/najam" element={<Najam />} />
        <Route path="/pravilnik" element={<Pravilnik />} />
        <Route path="/kontakt" element={<Kontakt />} />

      </Routes>
    </Router>
  </StrictMode>
);
