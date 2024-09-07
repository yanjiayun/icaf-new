"use client"
import React from 'react';
import Button from '../Button';
import a from '../../public/landingPage/a.jpg';
import b from '../../public/landingPage/b.jpg';
import c from '../../public/landingPage/c.png';
import d from '../../public/landingPage/d.jpg';
import e from '../../public/landingPage/e.jpg';
import f from '../../public/landingPage/f.jpg';
import g from '../../public/landingPage/g.jpg';
import h from '../../public/landingPage/h.jpg';
import i from '../../public/landingPage/i.jpg';
import j from '../../public/landingPage/j.jpg';

import Image from "next/image";

const Bottom = () => {

  const images = [a, b, c, d, e, f, g, h, i, j];

  return (
    <section className='relative z-50 m-auto max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20'>
      <div className='rounded-3xl bg-blue bg-opacity-10'>
        <h2 className='ml-12 pt-28 font-montserrat font-semibold text-2xl text-left w-full md:w-3/4'>Your donation today will cultivate children's creativity and grow their mutual empathy for shared prosperity and “a more perfect union.”</h2>
        <div className='ml-12 mt-12 pb-28 grid grid-cols-2 gap-x-5 sm:w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4'>
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
      </div>
      <div className="py-32 z-20 flex flex-row overflow-x-auto m-auto whitespace-nowrap px-4 mb-10 gap-x-4 scrollbar-hide">
        {/* <Image src={a} alt="" className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-cover object-center rounded-xl"/> */}
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`image-${index}`} 
              className="w-72 xl:w-96 h-44 md:h-48 lg:h-52 xl:h-64 z-20 object-cover object-center rounded-xl"
            />
          ))}
      </div>
      

      <img src="/landingPage/RedAndBlueFirework.png" className='z-10 absolute right-0 -top-[50px] xsm:-top-[100px] md:top-64 lg:top-56 lg:right-2 xl:top-36 max-w-[300px] w-1/3 sm:w-1/4 2xl:w-1/5'/>

      
    </section>
  );
};

export default Bottom;