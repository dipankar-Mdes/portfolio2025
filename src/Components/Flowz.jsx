import React from 'react'
import Below from './Below'
import Navbar from './Navbar'
import logo3d from '../Resources/Images/logo3d2.svg'
import logo from '../Resources/Images/logo-2.png'
import book1 from '../Resources/Images/book1.jpg'
import book2 from '../Resources/Images/book2.png'
import book3 from '../Resources/Images/book3.jpg'
import screens from '../Resources/Images/screens.svg'
import not1 from '../Resources/Images/not1.png'
import not2 from '../Resources/Images/not2.png'
import not3 from '../Resources/Images/not3.png'
import not4 from '../Resources/Images/not4.png'
import widget1 from '../Resources/Images/widget1.svg'
import TiltedCard from './reactbits/Components/TiltedCard/TiltedCard'

function Flowz() {
  return (
    <div className='relative w-full h-fit bg-[#e7e7e7] flex flex-col items-center'>
        <div className="flex justify-center sticky top-5 z-10">
          <Navbar />
        </div>
        <div className='flex items-end gap-0 justify-center w-full'>
          <div className='flex gap-2 w-[20vw] h-fit flex-col align-top justify-start items-start content-start mb-24'>
            <h1 className='font-pop text-slate-800 text-2xl'>Brief</h1>
            <p className='font-pop text-slate-700 text-sm whitespace-normal'>To achieve better outcomes from their invested efforts, people need a focused mind driven by sustained attention. However, in today’s fast-paced world, individuals often prioritize instant gratification over delayed rewards, which repeatedly contributes to a shrinking attention span, ultimately affecting their lifestyle.</p> 
          </div>
          <iframe src='https://my.spline.design/untitled-60790c5243db8025aa7d561b9ee4de33/' data-scroll data-scroll-speed="0" data-scroll-exclude className='copybutt2 h-[60vh] w-[35rem] -mr-44'></iframe>
        </div>
        <p className='font-pop text-slate-700 text-sm whitespace-pre-wrap w-[47vw] text-center mb-24'>This project aims to design a tool that encourages introspection and retrospection, helping users work on activities that directly or passively contribute to prolonging sustained attention. Additionally, it seeks to restore the natural order of mental energy, enabling users to develop healthier cognitive habits.</p>
        <img src={logo3d} alt="" className='w-[20vw] mb-24' />
        <div className='flex gap-5 mb-24 items-end'>
          <img src={logo} alt="" className='w-14 h-fit'/>
          <p className='font-pop text-slate-700 text-sm whitespace-pre-wrap w-[47vw] text-left'>The tilted and incomplete ellipses symbolize daily life habits and how they shape us both physically and mentally.</p>
        </div>
        <h1 className='font-pop text-slate-800 text-2xl w-[50vw] text-left mb-8'>Research</h1>
        <div className='flex gap-2 items-start justify-center mb-8'>
          <img src={book1} alt="" className='h-[15vw]' />
          <img src={book2} alt="" className='h-[15vw]' />
          <img src={book3} alt="" className='h-[15vw]' />
        </div>
        <p className='font-pop text-slate-700 text-sm whitespace-pre-wrap w-[50vw] text-left mb-24'>These books and few articles on attention span helped to understand how people build their habit and how we can intervein in their life style to make better changes</p>
        <h1 className='font-pop text-slate-800 text-2xl w-[50vw] text-left mb-2'>Process</h1>
        <p className='font-pop text-slate-700 text-sm whitespace-pre-wrap w-[50vw] text-left mb-24'>The goal was to create a habit tracking app which aims to minimize the digital distraction while your ability to focus at its peak in a day and remind you to take short breaks every now and then to avoid burnouts.</p>
        <div className='mb-24'><img src={screens} alt="" /></div>
        <p className='font-pop text-slate-700 text-sm whitespace-pre-wrap w-[50vw] text-left mb-24'>Notification and widgets are major part of the apps user experience cause the goal was minimize lesser valuable device interaction.</p>
        <div className='flex flex-wrap col-span-2 gap-5 w-[70vw] mb-8 justify-center'>
        <TiltedCard
            imageSrc={not2}
            altText="Cuppahtee"
            captionText="Cuppahtee"
            containerHeight="219px"
            containerWidth="404px"
            imageHeight="219px"
            imageWidth="404px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
            <p className="tilted-card-demo-text">
                Cuppahtee
            </p>
            }   
          />
        <TiltedCard
            imageSrc={not1}
            altText="Cuppahtee"
            captionText="Cuppahtee"
            containerHeight="219px"
            containerWidth="404px"
            imageHeight="219px"
            imageWidth="404px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
            <p className="tilted-card-demo-text">
                Cuppahtee
            </p>
            }   
          />
        <TiltedCard
            imageSrc={not3}
            altText="Cuppahtee"
            captionText="Cuppahtee"
            containerHeight="219px"
            containerWidth="404px"
            imageHeight="219px"
            imageWidth="404px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
            <p className="tilted-card-demo-text">
                Cuppahtee
            </p>
            }   
          />
        <TiltedCard
            imageSrc={not4}
            altText="Cuppahtee"
            captionText="Cuppahtee"
            containerHeight="219px"
            containerWidth="404px"
            imageHeight="219px"
            imageWidth="404px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
            <p className="tilted-card-demo-text">
                Cuppahtee
            </p>
            }   
          />
          </div>
        <div className='mb-24'>
        <TiltedCard
            imageSrc={widget1}
            altText="Cuppahtee"
            captionText="Cuppahtee"
            containerHeight="277px"
            containerWidth="599px"
            imageHeight="277px"
            imageWidth="599px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
            <p className="tilted-card-demo-text">
                Cuppahtee
            </p>
            }   
        />
        </div>
        <h1 className='font-pop text-slate-800 text-2xl w-[50vw] text-left mb-8'>Hi-Fi Prototype</h1>

        <figure class="mx-auto max-w-full w-60 h-auto mb-8">
          <div class="phoneframe">
            
              <div class="iframe-container">
                  <iframe 
                    src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/dPUPLmxcNBlb05pXrGTqYu/sdp?node-id=168-978&page-id=0:1&scaling=scale-down"  
                    allowfullscreen>
                  </iframe>
              </div>
            </div>
        </figure>
        <p className='font-pop text-slate-700 text-xl whitespace-pre-wrap w-[50vw] text-center mb-24'>here’s a interactive prototype, feel free to interact and explore!</p>
        <Below />
    </div>
  )
}

export default Flowz