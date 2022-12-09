import React from 'react';

// import hero data
import { heroData } from '../data';

// import components
import Header from './Header';

const Hero = () => {
  // destructure hero
  const { title, subtitle, image } = heroData;
  return (
    <section className='lg:h-[700px]'>
      <Header />
      <div className='container mx-auto h-full relative mt-20'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          {/* text */}
          <div className='text-center xl:text-left xl:absolute'>
            {/* title */}
            <h1
              className='h1 xl:max-w-[700px] mb-6 xl:mb-12'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h1>
            {/* subtitle */}
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </p>
          </div>
          {/* image */}
          <div
            className='xl:absolute xl:-right-12'
            data-aos='fade-up'
            data-aos-delay='700'
          >
            <img src={image} alt=''/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
