"use client"
import React from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WhyICAF = () => {

  return (
    <>
      <section className='relative z-50 -mt-8 md:-mt-28 mb-48'>
        <img src="/landingPage/BlueFirework.png" className='absolute right-1/3 -top-12 w-1/24 hidden lg:block'/>
        <div className='m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 grid grid-cols-2 relative'>
          <h2 className='text-center text-[32px] lg:text-[40px] font-extrabold font-montserrat z-100 col-span-2 mb-10 lg:mb-20'>Why ICAF?</h2> 
          <div className='col-span-2 lg:col-span-1'>
            <div className='flex col-span-1'>
              <AdsClickIcon style={{ color: "#2057CC" }}/>
              <h2 className="ml-5 text-blue text-2xl lg:text-4xl font-semibold font-montserrat">Mission</h2>
            </div>
            <p className="mt-4 lg:ml-10 col-span-1 lg:col-span-2 text-base text-black font-normal font-openSans">To seed students' imagination, cultivate their creativity, and grow mutual empathy through the power of art. </p> 
          </div>

          <div className='mt-10 lg:mt-0 col-span-2 lg:col-span-1'>
            <div className='flex col-span-1'>
              <VisibilityIcon style={{ color: "#DA1E40" }}/>
              <h2 className="ml-5 text-main-red text-2xl lg:text-4xl font-semibold font-montserrat">Vision</h2>
            </div>
            <p className="mt-4 lg:ml-10 col-span-1 lg:col-span-2 text-base text-black font-normal font-openSans">To democratize creativity and mainstream empathy for shared prosperity and “a more perfect union.</p>
            </div>
          </div>

          <img 
            src="/landingPage/missionMapUS.png" 
            alt="us map" 
            className="object-contain object-center absolute left-1/2 -translate-x-1/2 top-10 w-full h-full sm:h-fit max-h-[400px] lg:max-h-none lg:h-full lg:left-0 lg:translate-x-0 lg:top-auto lg:bottom-0 lg:w-1/2 lg:scale-110 xl:scale-125 2xl:scale-150 lg:translate-y-1/2 " 
          />  

          <img 
            src="/landingPage/missionMapWorld.png" 
            alt="world map" 
            className="object-contain object-center absolute w-1/2 h-full hidden lg:block translate-x-0 right-0 top-auto bottom-0 lg:scale-110 xl:scale-125 2xl:scale-150 translate-y-1/2" 
          />



        {/* <div className='m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 grid grid-cols-2 relative'>
          <h2 className='text-center text-3xl font-extrabold font-montserrat z-100 col-span-2'>Why ICAF?</h2> 
          <div className="relative col-span-2 lg:col-span-1 h-80">
            <div className='mx-auto w-[380px] lg:w-full mt-12 grid grid-cols-1 lg:grid-cols-3'>
              <div className='flex col-span-1'>
                <AdsClickIcon style={{ color: "#2057CC" }}/>
                <h2 className="ml-5 text-blue text-2xl lg:text-4xl font-semibold font-montserrat">Mission</h2>
              </div>
              <p className="mt-4 lg:mt-0 lg:ml-10 col-span-1 lg:col-span-2 text-base text-black font-normal font-openSans">To seed students' imagination, cultivate their creativity, and grow mutual empathy through the power of art. </p>
              <div className='mt-10 flex col-span-1'>
                <VisibilityIcon style={{ color: "#DA1E40" }}/>
                <h2 className="ml-5 text-main-red text-2xl lg:text-4xl font-semibold font-montserrat">Vision</h2>
              </div>
              <p className="mt-4 lg:mt-10 lg:ml-10 col-span-1 lg:col-span-2 text-base text-black font-normal font-openSans">To democratize creativity and mainstream empathy for shared prosperity and “a more perfect union.</p>
            </div>
            <img src="/landingPage/missionMapUS.png" alt="GirlICAF for 2xl devices" className="object-contain object-center absolute left-1/2 -translate-x-1/2 top-10 sm:w-4/5 md:1/2 lg:w-full h-full" />  
          </div>

          <div className="relative col-span-2 lg:col-span-1 h-80">
            <div className=" flex flex-col items-start">
              <div className="mx-auto mt-10 relative">
                <div className="z-10 rounded-t-full rounded-b-full bg-gradient-to-b from-main-red to-blue absolute left-3.5 top-0 h-full w-1 bg-red-500"></div>
                <div className="mt-4 z-50 flex items-center mb-8">
                  <div className="z-50 h-8 w-8 rounded-full bg-main-red"></div>
                  <h2 className="ml-8 text-2xl font-semibold font-montserrat">Social and Cultural Impact</h2>
                </div>
                <div className="z-50 flex items-center mb-8">
                  <div className="z-50 h-8 w-8 rounded-full bg-blue"></div>
                  <div className="ml-8">
                    <h2 className="text-2xl font-semibold font-montserrat">115 Countries Reached</h2>
                    <p className="text-base text-black font-normal font-openSans">to make students creative and empathetic</p>
                  </div>
                </div>
                <div className="z-50 flex items-center mb-8">
                  <div className="z-50 h-8 w-8 rounded-full bg-main-red"></div>
                  <div className="ml-8">
                    <h2 className="text-2xl font-semibold font-montserrat">500+ Workshops</h2>
                    <p className="text-base text-black font-normal font-openSans">at events and exhibitions worldwide</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="z-50 mb-4 h-8 w-8 rounded-full bg-blue"></div>
                  <div className="ml-8">
                    <h2 className="text-2xl font-semibold font-montserrat">2 Million Kids Worldwide</h2>
                    <p className="text-base text-black font-normal font-openSans">produced original works for ICAF</p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/landingPage/missionMapWorld.png" alt="GirlICAF for 2xl devices" className="object-contain object-center absolute left-1/2 -translate-x-1/2 top-16 lg:top-10 w-full h-full" />
          </div>
        </div> */}
      </section>

      <section className='my-40 object-contain object-center'>
        <img src="/landingPage/GirlICAF_sm.png" alt="GirlICAF for sm devices" className="w-full h-fit max-h-[600px] block sm:hidden" />
        <img src="/landingPage/GirlICAF_md.png" alt="GirlICAF for md devices" className="w-full h-fit hidden sm:block md:hidden" />
        <img src="/landingPage/GirlICAF_lg.png" alt="GirlICAF for lg devices" className="w-full h-fit hidden md:block lg:hidden" />
        <img src="/landingPage/GirlICAF_xl.png" alt="GirlICAF for xl devices" className="w-full h-fit hidden lg:block xl:hidden" />
        <img src="/landingPage/GirlICAF_2xl.png" alt="GirlICAF for 2xl devices" className="w-full h-fit max-h-[700px] hidden xl:block" />
      </section>

    </>
  );
};

export default WhyICAF;