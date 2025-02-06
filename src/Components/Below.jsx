import React from 'react'
import text from '../Resources/Images/text1.svg';
import { Dock, DockIcon } from './ui/dock';
import { Link } from 'react-router-dom'


function Below() {
  return (
    <div className='w-full bg-[#bb93e8] flex h-fit'>
        <div className='w-full flex mx-[6vw] my-[3vw] justify-between'>
          <div className="h-full flex flex-col justify-between items-start">
            <div className='inline-flex gap-2 items-center justify-center px-4 py-2 bg-[#cdaef1] w-fit h-fit rounded-md'>
              <i className="bi bi-envelope text-lg text-[#312243]"></i>
              <h4 className='text-lg font-pop text-[#312243]'>roy07dipankar@gmail.com</h4>
            </div>
            <div className='flex items-center justify-center px-6 py-2 bg-[#cdaef1] w-fit h-fit rounded-md'>
              <h4 className='text-sm font-robotoSlab text-[#312243]'>© 2025 Dipankar. All rights reserved</h4>
            </div>
          </div>
          {/* <div className='flex h-full items-end pb-2'>
            <Dock direction='middle'>
              <DockIcon><Link to="/"><i className="bi bi-house-door text-2xl text-zinc-50 hover:bg-[#cdaef1] transition-all rounded-sm px-3 py-1"></i></Link></DockIcon>
              <DockIcon><Link to="/artworks"><i className="bi bi-brush text-2xl text-zinc-50 hover:bg-[#cdaef1] transition-all rounded-sm px-3 py-1"></i></Link></DockIcon>
              <DockIcon><Link to="/aboutme"><i className="bi bi-file-earmark-person text-2xl text-zinc-50 hover:bg-[#cdaef1] transition-all rounded-sm px-3 py-1"></i></Link></DockIcon>
            </Dock>
          </div> */}
          <div className='flex w-fit h-fit relative -mr-32'>
            <div className='h-[1px] w-[1px] overflow-visible relative'>
              <img src={text} alt="" className='min-w-[17rem] min-h-[5rem] absolute top-[20.5rem] left-[5rem]'/>
            </div>
            <iframe src='https://my.spline.design/untitled-7bbf16aae213ef536b3e9b89da290804/' data-scroll data-scroll-speed="0" data-scroll-exclude className='copybutt h-[60vh] w-[35rem] mr-16'></iframe> 
          </div>
        </div>
    </div>
  )
}





export default Below