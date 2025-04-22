import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'
import ArrayComponent from './Array/ArrayComponent.jsx'
createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <App />
    {/* <ArrayComponent/> */}  
</StrictMode>
)
