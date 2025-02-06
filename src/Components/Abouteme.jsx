import React from 'react'
import Navbar from './Navbar'
import Below from './Below'

function Abouteme() {
  return (
    <div className='relative w-full h-fit'>
        <div className="flex justify-center sticky top-5 z-10">
            <Navbar />
        </div>
        <Below />
    </div>
  )
}

export default Abouteme