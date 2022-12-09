import React from 'react';

// import copyright data
import { copyrightData } from '../data';

const Copyright = () => {
  // destructure copyright data
  const { text, icon } = copyrightData;
  return (
    <section className='mt-5 pb-5' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center md:text-center  lg:flex-row justify-between gap-y-8'>
          {/* text */}
          <div className='text-sm items-center text-center text font-light italic max-w-[360px]'>{text}</div>
          <div className='-order-1 md:order-1'>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
