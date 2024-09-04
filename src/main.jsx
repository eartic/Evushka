import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logo from './Components/Banner/logo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logo/>
  </StrictMode>,
)
