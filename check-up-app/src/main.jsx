import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Services from './Pages/Services.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Billing from './Pages/Billing.jsx'
import FacilitySearchPage from './Pages/FacilitySearchPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/facility" element={<FacilitySearchPage />} />
        <Route path="/setting" element={<App />} />
        <Route path="/contact" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
