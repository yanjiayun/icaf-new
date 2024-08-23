"use client"
import React from 'react';
import Button from '../Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LandingHeader = () => {

  return (
    <>
      <section className='relative z-10 mt-[98px]'>      
        <img src="/landingPage/beginner_sm.png" alt="Beginner for sm devices" className="w-full h-fit max-h-[600px] block sm:hidden" />
        <img src="/landingPage/beginner_md.png" alt="Beginner for md devices" className="w-full h-fit hidden sm:block md:hidden" />
        <img src="/landingPage/beginner_lg.png" alt="Beginner for lg devices" className="w-full h-fit hidden md:block lg:hidden" />
        <img src="/landingPage/beginner_xl.png" alt="Beginner for xl devices" className="w-full h-fit hidden lg:block xl:hidden" />
        <img src="/landingPage/beginner_2xl.png" alt="Beginner for 2xl devices" className="w-full h-fit max-h-[700px] hidden xl:block" />
        {/* <div className="m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-b from-white/95 to-white/0 from-0% to-90% sm:to-70% sm:bg-gradient-to-r absolute top-0 w-full h-full flex flex-col"> */}
        <div className="m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 absolute top-0 w-full h-full flex flex-col">
          <div className='w-full sm:w-2/3 mt-10 md:mt-16 lg:mt-20 xl:mt-24'>
            <h1 className="font-montserrat text-4xl font-extrabold lg:text-6xl text-black">Welcome to ICAF, Inspiring Creativity, Transforming Lives</h1>
            <p className='font-openSans mt-5 text-xl font-normal lg:text-xl lg:font-semibold text-black block'>Empowering children through the arts to foster creativity and positive change since 1997.</p>
          </div>
          
          <div className='mt-8 sm:mt-4 md:mt-8 lg:mt-4 xl:mt-8'>
            <Button
              bgColor="bg-yellow"
              textColor="text-black"
              link="/"
              icon={<FavoriteBorderIcon />}
            >
              Donate to our campaign
            </Button>
          </div>
        </div>
      </section>

      {/* <section className='w-full absolute top-[158px] z-0'>
        <img src="/landingPage/beginner_bg_sm.png" alt="Beginner bg for sm devices" className="w-full h-fit block sm:hidden" />
        <img src="/landingPage/beginner_bg_md.png" alt="Beginner bg for md devices" className="w-full h-fit hidden sm:block md:hidden" />
        <img src="/landingPage/beginner_bg_lg.png" alt="Beginner bg for lg devices" className="w-full h-fit hidden md:block lg:hidden" />
        <img src="/landingPage/beginner_bg_xl.png" alt="Beginner bg for xl devices" className="w-full h-fit hidden lg:block xl:hidden" />
        <img src="/landingPage/beginner_bg_2xl.png" alt="Beginner bg for 2xl devices" className="w-full h-fit hidden xl:block" />
      </section> */}
    </>
  );
};

export default LandingHeader;