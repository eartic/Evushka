import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; {/* Dodaj BrowserRouter*/}
import './index.css';
import Naslovna from '/src/Components/Pages/Naslovna.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/Evushka">  {/* Dodaj Router s basename */}
      <Naslovna />
    </Router>
  </StrictMode>,
);