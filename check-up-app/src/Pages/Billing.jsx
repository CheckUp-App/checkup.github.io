import React from 'react';
import Navbar from '../Components/Navbar';
import Invoice from '../Components/Invoice';
import AppointmentNotes from '../Components/AppointmentNotes';


const Billing = () => {
 return (
   <div className="billing-page">
     <Navbar />
     <div className="invoice-container">
       <Invoice />
       </div>
       <div className="notes-container">
       <AppointmentNotes />
     </div>
     </div>
 );
}


export default Billing

