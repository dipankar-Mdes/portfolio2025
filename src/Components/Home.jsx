import React from 'react'
import img1 from '../Resources/Images/avatar1.jpeg';
import pointer from '../Resources/Images/Group1.svg';
import pointerr from '../Resources/Images/Group2.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import pics from '../Resources/Images/Group3.svg';
import thumb from '../Resources/Images/Group4.svg';
import Below from './Below';


gsap.registerPlugin(MotionPathPlugin);

function Home() {
    gsap
    useGSAP(() => {
      
      gsap.from(".phone3d",{
        y:100,
        opacity:0,
        duration:1,
        delay:1.6
      })

      gsap.from(".pointer1", {
        motionPath:"M 0 100 Q 300 150 250 0 ",
        duration: 2,
        ease: "power3.inOut",
        delay: 1.6,
      });
      gsap.from(".pointer1", {
        opacity: 0,
        duration: 2,
        ease: "power3.inOut",
      });

      gsap.from(".pointer2", {
        motionPath: "M 250 150 Q 150 150 150 50",
        duration:2,
        ease: "power3.inOut",
        delay: 1.6,
      })
      gsap.from(".pointer2", {
        opacity: 0,
        duration: 2,
        ease: "power3.inOut",
      });
    })
  return (
    <div className='w-full h-fit flex items-start justify-start flex-col'>
        <main className='flex bg-[#e7e7e7] items-center flex-col font-pop p-10 pt-1'>
          <div className='flex flex-col justify-center gap-9 items-center w-3/6 mt-24'>
            <div className='aspect-square rounded-full overflow-hidden imagu1 border-2'><img src={img1} alt="" className='w-[4.5vw] aspect-square ' /></div>
            <h1 className='text-[10vw] text-slate-800 -mt-8'>Portfolio</h1>
            
            <img src={pointer} alt="" className='pointer1 relative left-[17vw] bottom-36 w-40' />
            <img src={pointerr} alt="" className='pointer2 relative -left-[35vw] bottom-72 w-32' />
            <h4 className='whitespace-pre-wrap relative -top-24 text-center text-[#9d9d9d]'>I’m a UI/UX designer passionate about creating meaningful digital experiences. With a strong background in graphic design and a knack for problem-solving, I blend creativity with functionality to craft user-centric solutions.</h4>
          </div>
          <iframe src='https://my.spline.design/iphone14procopy-c74830c4623d5d3d4fb54f99e2bd1bb6/' data-scroll data-scroll-speed="0" data-scroll-exclude className='phone3d w-[60vw] h-[90vh] -mt-36'></iframe>
          <div className='flex gap-5 justify-center items-center -mt-20'>
            <img src={pics} alt="" className='w-32'/>
            <h1 className='font-pop text-2xl '>worked with more than 7 clients</h1>
            <img src={thumb} alt="" className='-mt-7'/>
          </div>
        </main>
        <Below />
    </div>
  )
}

export default Home