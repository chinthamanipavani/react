import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App, { BringPizza, Offline } from './App.jsx'
import LandingPage from './Components/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <LandingPage/>
   </StrictMode>
)
