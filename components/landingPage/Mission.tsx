"use client"
import React from 'react';
import Button from '../Botton';
import { RedFirework } from '../../public/landingPage/RedFirework';

const Mission = () => {

  return (
    <>
      <section className='relative z-50'>      
        <div className='absolute right-0 hidden lg:block'><RedFirework /></div>
        <img src="/landingPage/missionMap.png" alt="Beginner for 2xl devices" className="flex mx-auto w-4/5 h-full" />
        <div className='mt-8 sm:mt-4 md:mt-8'>
          <Button
            bgColor="bg-yellow"
            textColor="text-black"
            link="/"
          >
            Learn more about our programs
          </Button>
        </div>


      </section>
    </>
  );
};

export default Mission;