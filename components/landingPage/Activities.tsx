"use client";
import React, { useState } from 'react';
import { AccordionCard } from './AccordionCard';
import TheArtsOlympiad from '../../public/landingPage/TheArtsOlympiad.png';
import WorldChildrenFestival from '../../public/landingPage/WorldChildrenFestival.png';
import PeacethroughArt from '../../public/landingPage/PeacethroughArt.png';
import ChildrenPanelConferences from '../../public/landingPage/ChildrenPanelConferences.png';

const Activities = () => {

  const [list] = useState([
    {
      backgroud: TheArtsOlympiad,
      header: "The Arts Olympiad*",
      element: "The largest US and global school art program",
      height: "220px", 
    },
    {
      backgroud: WorldChildrenFestival,
      header: "World Children's Festival",
      element: "A celebration that infuses creativity with empathy",
      height: "220px",  
    },
    {
      backgroud: PeacethroughArt,
      header: "Peace through Art",
      element: "Revive trust in humanity of children in conflict zoness",
      height: "220px",  
    },{
      backgroud: ChildrenPanelConferences,
      header: "Children's Panel Conferences",
      element: "Giving voice to children and educating adults",
      height: "220px",  
    },
  ]);

  return (
    <>
      <section className='mt-32 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
        <h1 className='mb-10 font-extrabold font-montserrat text-2xl lg:text-4xl text-center text-black'>Activities</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {
            list.map((item, key) => (
              <AccordionCard key={key} datas={item}/>
            ))
          }
        </div>
        <p className='text-left text-base font-normal font-openSans'>*The mark “Arts Olympiad” is used under license from the U.S. Olympic and Paralympic Committee.</p>
      </section>
    </>
  );
};

export default Activities;