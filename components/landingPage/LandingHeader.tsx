"use client"
import React from 'react';
import Button from '../Botton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LandingHeader = () => {

  return (
    <>
      <section className='relative z-0 mt-[98px]'>      
        <img src="/landingPage/beginner_sm.png" alt="Beginner for sm devices" className="w-full h-full block sm:hidden" />
        <img src="/landingPage/beginner_md.png" alt="Beginner for md devices" className="w-full h-full hidden sm:block md:hidden" />
        <img src="/landingPage/beginner_lg.png" alt="Beginner for lg devices" className="w-full h-full hidden md:block lg:hidden" />
        <img src="/landingPage/beginner_xl.png" alt="Beginner for xl devices" className="w-full h-ffull hidden lg:block xl:hidden" />
        <img src="/landingPage/beginner_2xl.png" alt="Beginner for 2xl devices" className="w-full h-full hidden xl:block" />

        <div className="bg-gradient-to-b from-white/90 to-white/0 sm:bg-gradient-to-r absolute top-0 left-0 w-full sm:w-2/3 xl:w-1/2 h-full flex flex-col px-6 lg:px-12 xl:px-20">
          <div className='mt-10 md:mt-16 lg:mt-20 xl:mt-24'>
            <h1 className="text-3xl md:text-[40px] lg:text-6xl font-extrabold text-black">Welcome to ICAF, Inspiring Creativity, Transforming Lives</h1>
            <p className='mt-5 text-base font-normal lg:text-xl lg:font-semibold text-black block sm:hidden md:block'>Empowering children through the arts to foster creativity and positive change since 1997.</p>
          </div>
          
          <div className='mt-8 sm:mt-4 md:mt-8'>
            <Button
              bgColor="bg-yellow"
              textColor="text-black"
              link="/"
              icon={<FavoriteBorderIcon />}
            >
              Donate to our cause
            </Button>
          </div>
        </div>

      </section>
    </>
  );
};

export default LandingHeader;