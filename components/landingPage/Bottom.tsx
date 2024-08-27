"use client"
import React from 'react';
import Button from '../Button';
import MyFavoriteSport2024 from '../../public/landingPage/MyFavoriteSport2024.png';
import Image from "next/image";

const Bottom = () => {

  return (
    <section className='relative w-full'>
      <div className='z-50 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
        <h2 className='font-montserrat font-semibold text-2xl text-left w-full md:w-3/4'>Your donation today will cultivate children's creativity and grow their mutual empathy for shared prosperity and “a more perfect union.”</h2>
        <div className='my-8 grid grid-cols-2 gap-x-5 sm:w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4'>
          <Button
            bgColor="bg-yellow"
            textColor="text-black w-full"
            link="/"
          >
            Donate
          </Button>
          <Button
            bgColor="bg-navy-blue"
            textColor="text-white w-full"
            link="/"
          >
            Contact Us
          </Button>
        </div>
        <div className="z-20 flex flex-row overflow-x-auto m-auto whitespace-nowrap px-4 mb-10 gap-x-4 scrollbar-hide">
          <Image src={MyFavoriteSport2024} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-scale-down rounded-xl"/>
          <Image src={MyFavoriteSport2024} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-scale-down rounded-xl"/>
          <Image src={MyFavoriteSport2024} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-scale-down rounded-xl"/>
          <Image src={MyFavoriteSport2024} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-scale-down rounded-xl"/>
          <Image src={MyFavoriteSport2024} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-scale-down rounded-xl"/>
          <Image src={MyFavoriteSport2024} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-scale-down rounded-xl"/>
        </div>
      </div>

      <img src="/landingPage/RedAndBlueFirework.png" className='z-10 absolute right-0 -top-[100px] sm:-top-[150px] md:-top-[100px] lg:right-20 max-w-[300px] w-1/3 sm:w-1/4 2xl:w-1/5'/>

      <div className='w-full absolute -bottom-52  -z-10'>
        <img src="/landingPage/background_sm.png" alt="Background for sm devices" className="w-full h-[900px] block sm:hidden" />
        <img src="/landingPage/background_md.png" alt="Background for md devices" className="w-full h-[800px] hidden sm:block md:hidden" />
        <img src="/landingPage/background_lg.png" alt="Background for lg devices" className="w-full h-[800px] hidden md:block lg:hidden" />
        <img src="/landingPage/background_xl.png" alt="Background for xl devices" className="w-full h-[800px] hidden lg:block xl:hidden" />
        <img src="/landingPage/background_2xl.png" alt="Background for 2xl devices" className="w-full h-[850px] hidden xl:block" />
      </div>
      
    </section>
  );
};

export default Bottom;