import React from 'react'
import text from '../Resources/Images/text1.svg';
import { Dock } from './ui/dock';



function Below() {
  return (
    <div className='w-full bg-[#bb93e8] flex h-fit'>
        <div className='w-full flex mx-[6vw] my-[3vw]'>
          <div className="h-full flex flex-col justify-between items-start">
            <div className='inline-flex gap-2 items-center justify-center px-8 py-4 bg-[#cdaef1] w-fit h-fit rounded-xl'>
              <i className="bi bi-envelope text-lg"></i>
              <h4 className='text-lg font-pop text[#312243]'>roy07dipankar@gmail.com</h4>
            </div>
            <div className='flex items-center justify-center px-6 py-2 bg-[#cdaef1] w-fit h-fit rounded-md'>
              <h4 className='text-sm font-robotoSlab text-[#312243]'>© 2025 Dipankar. All rights reserved</h4>
            </div>
          </div>
          <div className='flex w-fit h-fit relative'>
            <div className='h-[1px] w-[1px] overflow-visible relative'>
              <img src={text} alt="" className='min-w-[17rem] min-h-[5rem] absolute top-[21.5rem] left-[5rem]'/>
            </div>
            <iframe src='https://my.spline.design/untitled-7bbf16aae213ef536b3e9b89da290804/' data-scroll data-scroll-speed="0" data-scroll-exclude className='copybutt h-[60vh] w-[35rem] mr-16'></iframe> 
          </div>
          <Dock />
        </div>
    </div>
  )
}





export default Below