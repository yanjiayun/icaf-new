"use client"
import React from 'react';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Mission = () => {

  return (
    <>
      <section className='relative z-50 mt-32 mb-48'>
        <img src="/landingPage/RedFirework.png" className='absolute right-0 -top-12 lg:-top-24 w-1/6 md:w-1/8 lg:w-1/5'/>
        <img src="/landingPage/BlueFirework.png" className='absolute left-1/3 -top-20 w-1/24 hidden lg:block'/>
        <div className='m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20 grid grid-cols-2 relative'>
          <h2 className='text-center text-3xl font-extrabold font-montserrat z-100 col-span-2'>Mission & Vision</h2> 
          <div className="relative col-span-2 lg:col-span-1 h-80">
            <div className='mx-auto w-[380px] lg:w-full mt-12 grid grid-cols-1 lg:grid-cols-3'>
              <div className='flex col-span-1'>
                <AdsClickIcon style={{ color: "#2057CC" }}/>
                <h2 className="ml-5 text-main-blue text-2xl lg:text-4xl font-semibold font-montserrat">Mission</h2>
              </div>
              <p className="mt-4 lg:mt-0 lg:ml-10 col-span-1 lg:col-span-2 text-base text-black font-normal font-openSans">To inspire kids to imagine, create, and care for each other.</p>
              <div className='mt-10 flex col-span-1'>
                <VisibilityIcon style={{ color: "#DA1E40" }}/>
                <h2 className="ml-5 text-main-red text-2xl lg:text-4xl font-semibold font-montserrat">Vision</h2>
              </div>
              <p className="mt-4 lg:mt-10 lg:ml-10 col-span-1 lg:col-span-2 text-base text-black font-normal font-openSans">We envision a world where everyone is creative and kind, achieving success and happiness together.</p>
            </div>
            <img src="/landingPage/missionMapUS.png" alt="GirlICAF for 2xl devices" className="object-contain object-center absolute left-1/2 -translate-x-1/2 top-10 sm:w-4/5 md:1/2 lg:w-full h-full" />  
          </div>

          <div className="relative col-span-2 lg:col-span-1 h-80">
            <div className=" flex flex-col items-start">
              <div className="mx-auto mt-10 relative">
                <div className="z-10 rounded-t-full rounded-b-full bg-gradient-to-b from-main-red to-main-blue absolute left-3.5 top-0 h-full w-1 bg-red-500"></div>
                <div className="mt-4 z-50 flex items-center mb-8">
                  <div className="z-50 h-8 w-8 rounded-full bg-main-red"></div>
                  <h2 className="ml-8 text-2xl font-semibold font-montserrat">Social and Cultural Impact</h2>
                </div>
                <div className="z-50 flex items-center mb-8">
                  <div className="z-50 h-8 w-8 rounded-full bg-main-blue"></div>
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
                  <div className="z-50 mb-4 h-8 w-8 rounded-full bg-main-blue"></div>
                  <div className="ml-8">
                    <h2 className="text-2xl font-semibold font-montserrat">2 Million Kids Worldwide</h2>
                    <p className="text-base text-black font-normal font-openSans">produced original works for ICAF</p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/landingPage/missionMapWorld.png" alt="GirlICAF for 2xl devices" className="object-contain object-center absolute left-1/2 -translate-x-1/2 top-16 lg:top-10 w-full h-full" />
          </div>
        </div>
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

export default Mission;