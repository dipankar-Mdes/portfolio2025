import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className='nav flex justify-between px-4 py-3 rounded-xl text-slate-800 items-baseline w-[40vw]'>
        <Link to="/"><li className='text-2xl font-bold'>Dipankar Roy</li></Link>
        <div className='flex gap-11 font-medium text-lg'>
          <Link to="/"><li>Art Works</li></Link>
          <Link to="/flowz"><li>Project</li></Link>
          <Link to="/"><li>About Me</li></Link>
        </div>
      </nav>
      </div>
  )
}

export default Navbar