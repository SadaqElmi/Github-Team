import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './HeroSection/Herosection.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HeroSection />
  </StrictMode>,
)
