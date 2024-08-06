import React from 'react';


const details = [
   {
       first_name: 'Robert',
       last_name: 'Downey',
       email: 'rdjr@me.com',
       phone: '555-555-5555',
   },
];


export default function Welcome() {
   const { first_name, last_name } = details[0]; 

   return (
     <>
       <div className='mx-auto max-w-7xl px-6 lg:px-8 my-10'>
           {/* Logo Animation in the future */}
           {/* <div className='flex justify-center w-full'>
               <img src="https://i.imgur.com/WWrPdfU.png" alt="" />
           </div> */}
           <div className='text-4xl font-bold'>
               <h1>Welcome Back, {first_name} {last_name}!</h1> {/* Display full name */}
           </div>
       </div>
     </>
   );
}

  