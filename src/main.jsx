import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Naslovna from '/src/Components/Pages/Naslovna.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Naslovna/>
  </StrictMode>,
)
