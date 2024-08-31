import React from 'react'

const details = [
    {
        email: 'jdoe@me.com',
        phone: '555-555-5555',
    },
]

export default function FindProviders() {
    return (
      <>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 my-10'>
            {/* Logo Animation in the future */}
            {/* <div className='flex justify-center w-full'>
                <img src="https://i.imgur.com/WWrPdfU.png" alt="" />
            </div> */}
            <div className='text-4xl font-bold'>
                <h1>Welcome Back, {details[0].first_name} </h1>
            </div>
        </div>
      </>
    )
  }
  