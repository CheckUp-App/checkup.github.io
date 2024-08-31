import './App.css'
import Navbar from './Components/Navbar'
import UpcomingAppointments from './Components/UpcomingAppointments'
import PastAppointments from './Components/PastAppointments'
import Welcome from './Components/Welcome'
import InsuranceCard from './Components/InsuranceCard'

export default function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <InsuranceCard />
      <UpcomingAppointments />
      <PastAppointments />
    </>
  )
}

