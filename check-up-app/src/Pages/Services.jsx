import { useState } from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import UpcomingAppointments from '../Components/UpcomingAppointments'
import PastAppointments from '../Components/PastAppointments'


export default function Services() {

  return (
    <>
      <Navbar />
      {/* <PaymentNavbar /> */}
      <UpcomingAppointments />
      <PastAppointments />
    </>
  )
}
