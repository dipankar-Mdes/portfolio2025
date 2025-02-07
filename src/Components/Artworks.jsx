import React from 'react'
import Navbar from './Navbar'
import Below from './Below'
import TiltedCard from './reactbits/Components/TiltedCard/TiltedCard'
import Masonry from 'react-masonry-css'
import bagbakri from '../Resources/Images/bag-bakri.png'
import bihu from '../Resources/Images/bihu.jpg'
import defoe from '../Resources/Images/defoe.png'
import enho from '../Resources/Images/en-ho.png'
import exp from '../Resources/Images/expression.jpg'
import ghar from '../Resources/Images/ghar.png'
import greek from '../Resources/Images/greek-statue.png'
import holy from '../Resources/Images/holy.jpeg'
import hunk from '../Resources/Images/hunk.jpeg'
import kids from '../Resources/Images/kids.jpg'
import me from '../Resources/Images/me--.jpeg'
import guy from '../Resources/Images/random-guy.png'
import rezaaa from '../Resources/Images/rezaaa.png'
import wings from '../Resources/Images/wings-of-justice.jpeg'
import apple from '../Resources/Images/women-apple.jpeg'
import pin from '../Resources/Images/pintrest-boyfriend.jpeg'



function Artworks() {
    const breapoints = {
        default: 4,
        1100: 3,
        700: 1
    }

  return (
    
    <div className='relative w-full h-fit bg-[#e7e7e7]'>
        <div className='w-full h-full px-12 flex flex-col justify-center items-center'>
            <div className="flex justify-center sticky top-5 z-10">
                <Navbar />
            </div>
            <Masonry 
                breakpointCols={breapoints}
                className="my-masonry-grid mt-16"
                columnClassName="my-masonry-grid_column"
            >
                <div>
                    <img className='w-[300px]' src={bagbakri} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={bihu} alt="" />
                </div>
                <div>
                <img className='w-[300px]' src={defoe} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={enho} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={exp} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={ghar} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={greek} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={holy} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={hunk} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={kids} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={me} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={guy} alt="" />                              
                </div>
                <div>
                    <img className='w-[300px]' src={rezaaa} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={wings} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={apple} alt="" />
                </div>
                <div>
                    <img className='w-[300px]' src={pin} alt="" />
                </div>
            </Masonry >
        </div>
        <Below />
  </div>
  )
}

export default Artworks