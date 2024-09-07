"use client";
import React from 'react';
import { ProjectCard } from './ProjectCard';
import WorldChildrenFestival2025 from '../../public/landingPage/WorldChildrenFestival2025.png';
import MyFavoriteSport2024 from '../../public/landingPage/MyFavoriteSport2024.png';
import VRHeaven2025 from '../../public/landingPage/VRHeaven2025.png';

const SpecialProjects = () => {

  return (
    <>
      <img src="/landingPage/threeline_sm.png" alt="threeline for sm devices" className="mt-96 xsm:mt-48 absolute w-full h-fit min-h-[600px] xsm:min-h-[400px] block sm:hidden" />
      <img src="/landingPage/threeline_md.png" alt="threeline for md devices" className="absolute w-full h-fit hidden sm:block lg:hidden" />
      <img src="/landingPage/threeline_lg.png" alt="threeline for lg devices" className="mt-96 absolute w-full h-fit hidden lg:block xl:hidden" />
      <img src="/landingPage/threeline_xl.png" alt="threeline for xl devices" className="mt-96 absolute w-full h-fit hidden xl:block 2xl:hidden" />
      <img src="/landingPage/threeline_2xl.png" alt="threeline for 2xl devices" className="absolute w-full h-fit hidden 2xl:block" />
      <section className='z-20 relative mt-32 mb-28 sm:mb-32 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
        <div className="flex justify-center items-center mb-10">
          <img src="/landingPage/BlueFirework.png" className="w-12 sm:w-16 md:w-14 lg:w-16 2xl:w-20 h-auto mx-2 mb-12 lg:mb-16 xl:mb-20" alt="left firework" />
          <h1 className="font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black">
            Special Projects Websites
          </h1>
          <img src="/landingPage/BlueFirework.png" className="w-12 sm:w-16 md:w-14 lg:w-16 2xl:w-20 h-auto mx-2 mb-12 lg:mb-16 xl:mb-20" alt="right firework" />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <ProjectCard  
            background={WorldChildrenFestival2025}
            title="World Children's Festival 2025"
            element="A three-day celebration of American values of creativity, diversity, and unity"
            link="#"
            borderColor="border-red"
          />
          <ProjectCard  
            background={MyFavoriteSport2024}
            title="My Favorite Sport 2024"
            element="A global art contest to celebrate the Paris Games"
            link="#"
            borderColor="border-blue"
          />
          <ProjectCard  
            background={VRHeaven2025}
            title="VR Heaven 2025/2026"
            element="Virtual Reality that brings Heaven to Earth"
            link="#"
            borderColor="border-yellow"
          />
        </div>
      </section>
    </>
  );
};

export default SpecialProjects;