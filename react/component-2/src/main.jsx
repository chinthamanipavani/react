import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../src/component/Component.css'
import App from './App.jsx'
import Component from './component/Component.jsx'
createRoot(document.getElementById('root')).render(
  <Component/>
)
