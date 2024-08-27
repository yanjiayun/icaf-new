"use client";
import React from 'react';
import { ProjectCard } from './ProjectCard';
import WorldChildrenFestival2025 from '../../public/landingPage/WorldChildrenFestival2025.png';
import MyFavoriteSport2024 from '../../public/landingPage/MyFavoriteSport2024.png';
import VRHeaven2025 from '../../public/landingPage/VRHeaven2025.png';

const SpecialProjects = () => {

  return (
    <section className='my-40 mb-[300px] m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
      <h1 className='mb-10 font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black'>Special Projects Websites</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <ProjectCard  
          background={WorldChildrenFestival2025}
          title="World Children's Festival 2025"
          element="A three-day celebration of American values of creativity, diversity, and unity"
          link="#"
        />
        <ProjectCard  
          background={MyFavoriteSport2024}
          title="My Favorite Sport 2024"
          element="A global art contest to celebrate the Paris Games"
          link="#"
        />
        <ProjectCard  
          background={VRHeaven2025}
          title="VR Heaven 2025/2026"
          element="Virtual Reality that brings Heaven to Earth"
          link="#"
        />
      </div>
    </section>
  );
};

export default SpecialProjects;