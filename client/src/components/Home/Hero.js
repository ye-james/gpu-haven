import React from 'react'
import HeroImg from '../../imgs/RTX_HERO.jpg';


function Hero() {
  return (
      <section id="hero" className=''>
          <div className="w-screen h-screen bg-fixed bg-center bg-no-repeat bg-cover max-h-max"
              style={{ backgroundImage: `url(${HeroImg})` }}>
              

            <div className="flex flex-col items-center justify-center w-1/2 h-full text-primary-gray">
                <h1 className="italic font-medium tracking-wide uppercase text-7xl">GPU Haven</h1>
                <p className="mt-2 text-lg tracking-1xl">All your GPU needs in the palm of your hands</p>
            </div>              
        </div>


    </section>    
)
}

export default Hero