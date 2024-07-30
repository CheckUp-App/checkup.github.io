import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import UpcomingAppointments from './Components/UpcomingAppointments'
import Welcome from './Components/Welcome'
import InsuranceCard from './Components/InsuranceCard'

export default function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <InsuranceCard />
      <UpcomingAppointments />
    </>
  )
}

