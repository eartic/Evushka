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
import { Helmet } from 'react-helmet';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/">
      <ScrollToTop /> 
      <Helmet>
        <meta name="description" content="Plesna igraonica i rođendaonica- Evushka - Ples za djecu, tečajevi za odrasle, team building, rođendani i najam prostora, tečaj plesa za parove, proslave rođendana." />
        <meta name="keywords" content="Evushka, ples, djeca, tečaj plesova, rođendani, Zagreb, najam prostora, kontakt, čuvaonica, mladenci, najam, pravilnik" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Evushka" />
        <meta property="og:description" content="Evushka" />
        <meta property="og:image" content="https://evushka.com/assets/logo_djeca-CDRpXGzM.jpg" />
        <meta property="og:url" content="https://evushka.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
