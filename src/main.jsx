import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/theme.css' // Direct theme compilation anchor
import 'tailwindcss/utilities.css' // Inject utility tokens cleanly
import './index.css' // Load your layout configurations
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)