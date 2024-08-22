"use client"
import React from 'react';

const WhatWeDo = () => {

  return (
    <>
      <section className='m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
        <h1 className='font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black'>What we do</h1>
        <p className='mt-10 text-xl font-normal text-black font-openSans text-left lg:text-center'>ICAF empowers children by seeding their imagination, cultivating creativity, and growing mutual empathy as building blocks for a more peaceful, prosperous, and sustainable future.</p>
        <div className='block lg:hidden mt-10 font-montserrat text-black font-bold text-2xl text-left'>
          <p>We focus on what's important for schoolchildren: How they view themselves.</p>
          <p>Our Holistic identity development has two phases:</p>
        </div>
        <p className='hidden lg:block mt-10 font-montserrat text-black font-bold text-2xl text-center'>We focus on what's important for schoolchildren: How they view themselves. Our Holistic identity development has two phases:</p>
        
        <div className='mt-9 grid grid-cols-2'>
          <div className='col-span-2 lg:col-span-1'>
            <img src="/landingPage/soccer.png" alt="UAE_-__Isra_Nadeem" className="w-fit h-fit lg:h-[204px] flex mx-auto" />
            <div className='mx-auto mt-4 grid grid-cols-4'>
              <h3 className='text-center col-span-1 lg:col-span-4 font-montserrat font-semibold text-2xl'>01</h3>
              <p className='ml-7mt-1 col-span-3 lg:col-span-4 text-left lg:text-center font-openSans font-normal text-xl'>Combine art and sports to develop "artist athletes"</p>
            </div>
          </div>
          <div className='mt-8 lg:mt-0 col-span-2 lg:col-span-1'>
            <img src="/landingPage/earth.png" alt="New-York-_Michael-Wong" className="w-fit h-fit lg:h-[204px] flex mx-auto" />
            <div className='mx-auto mt-4 grid grid-cols-4'>
              <h3 className='text-center col-span-1 lg:col-span-4 font-montserrat font-semibold text-2xl'>02</h3>
              <p className='ml-7mt-1 col-span-3 lg:col-span-4 text-left lg:text-center font-openSans font-normal text-xl'>Infuse creativity with empathy to grow "creative empaths"</p>
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;