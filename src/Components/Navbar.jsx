import React from 'react'
import { Link } from 'react-router-dom'
import { Dock, DockIcon } from './ui/dock'


function Navbar() {
  return (
    <div>
      <nav className='nav flex justify-between px-4 py-3 rounded-xl text-slate-800 items-baseline w-[40vw] h-[44px]'>
        
        <Dock direction='middle'>
          <DockIcon><Link to='/'><h1 className='font-pop text-xl hover:bg-[#ebebeb34] hover:text-orange-600 transition-all rounded-sm px-3 py-1'>Home</h1></Link></DockIcon>
          <DockIcon><Link to='/artworks'><h1 className='font-pop text-xl hover:bg-[#ebebeb34] hover:text-orange-600 transition-all rounded-sm px-3 py-1'>Artworks</h1></Link></DockIcon>
          <DockIcon><Link to='/flowz'><h1 className='font-pop text-xl hover:bg-[#ebebeb34] hover:text-orange-600 transition-all rounded-sm px-3 py-1'>Project</h1></Link></DockIcon>
          <DockIcon><Link to='/aboutme'><h1 className='font-pop text-xl hover:bg-[#ebebeb34] hover:text-orange-600 transition-all rounded-sm px-3 py-1'>Aboutme</h1></Link></DockIcon>
        </Dock>
      </nav>
      </div>
  )
}

export default Navbar