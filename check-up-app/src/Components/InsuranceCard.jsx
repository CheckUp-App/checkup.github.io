import React from 'react'

const details = [
    {
        first_name: 'Kevin',
        last_name: 'Uduji',
        email: 'jdoe@me.com',
        phone: '555-555-5555',
    },
]

export default function InsuranceCard() {
    return (
      <>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='flex justify-center w-full'>
                <img src="https://i.imgur.com/9tMlWP5.png" alt="" />
            </div>
        </div>
      </>
    )
  }
  