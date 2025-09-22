import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FindProviders from './Pages/FindProviders/FindProviders'
import BookAnAppointment from './Pages/BookAnAppointment.jsx'
import VerifyYourInsurance from './Pages/VerifyYourInsurance.jsx'
import ListYourPractice from './Pages/ListYourPratice.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/find-providers" element={<FindProviders />} />
        <Route path=" /book-appointment" element={<BookAnAppointment/>} />
        <Route path=" /verify-insurance" element={<VerifyYourInsurance/>} />
        <Route path=" /list-your-practice" element={<ListYourPractice/>} />
        {/* <Route path="/setting" element={<App />} />
        <Route path="/profile" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
