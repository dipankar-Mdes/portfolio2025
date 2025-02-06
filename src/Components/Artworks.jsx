import React from 'react'
import Navbar from './Navbar'
import Below from './Below'
import TiltedCard from './reactbits/Components/TiltedCard/TiltedCard'
import Masonry from 'react-masonry-css'



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
                <TiltedCard
                        imageSrc="/src/Resources/Images/bag-bakri.png"
                        altText="Cuppahtee"
                        captionText="Cuppahtee"
                        containerHeight="300px"
                        containerWidth="300px"
                        imageHeight="300px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            Cuppahtee
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/bihu.jpg"
                        altText="bihu"
                        captionText="bihu"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            bihu
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/defoe.png"
                        altText="defoe"
                        captionText="defoe"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            defoe
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/en-ho.png"
                        altText="en-ho"
                        captionText="en-ho"
                        containerHeight="318px"
                        containerWidth="300px"
                        imageHeight="318px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            en-ho
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/expression.jpg"
                        altText="Expression"
                        captionText="Expression"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            Expression
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/ghar.png"
                        altText="ghar"
                        captionText="ghar"
                        containerHeight="419px"
                        containerWidth="300px"
                        imageHeight="419px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            ghar
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/greek-statue.png"
                        altText="greek-statue"
                        captionText="greek-statue"
                        containerHeight="380px"
                        containerWidth="300px"
                        imageHeight="380px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            greek-statue
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/holy.jpeg"
                        altText="holy"
                        captionText="holy"
                        containerHeight="379px"
                        containerWidth="300px"
                        imageHeight="379px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            holy
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/hunk.jpeg"
                        altText="hunk"
                        captionText="hunk"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            hunk
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/kids.jpg"
                        altText="kids"
                        captionText="kids"
                        containerHeight="225px"
                        containerWidth="300px"
                        imageHeight="225px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            kids
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/me--.jpeg"
                        altText="me--"
                        captionText="me--"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            me--
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/random-guy.png"
                        altText="random-guy"
                        captionText="random-guy"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            random-guy
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/rezaaa.png"
                        altText="rezaaa"
                        captionText="rezaaa"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            rezaaa
                        </p>
                        }   
                />
                </div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/wings-of-justice.jpeg"
                        altText="wings-of-justice"
                        captionText="wings-of-justice"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            wings-of-justice
                        </p>
                        }   
                />
                </div>
                <div><TiltedCard
                        imageSrc="/src/Resources/Images/women-apple.jpeg"
                        altText="women-apple"
                        captionText="women-apple"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            women-apple
                        </p>
                        }   
                /></div>
                <div>
                <TiltedCard
                        imageSrc="/src/Resources/Images/pintrest-boyfriend.jpeg"
                        altText="pintrest-boyfriend"
                        captionText="pintrest-boyfriend"
                        containerHeight="452px"
                        containerWidth="300px"
                        imageHeight="452px"
                        imageWidth="300px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={false}
                        // className="break-inside-avoid"
                        overlayContent={
                        <p className="tilted-card-demo-text">
                            pintrest-boyfriend
                        </p>
                        }   
                />
                </div>
            </Masonry >
        </div>
        <Below />
  </div>
  )
}

export default Artworks