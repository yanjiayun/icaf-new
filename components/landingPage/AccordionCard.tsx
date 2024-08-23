"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Down } from "../../public/landingPage/icons/Down";
import { Up } from "../../public/landingPage/icons/Up";

export const AccordionCard = (props) => {
  const [isExpanded, SetIsExpanded] = useState(false);
  const [item] = useState(props.datas);

  const baseHeight = parseInt(item.height.replace("px", ""));
  const expandedHeight = isExpanded ? baseHeight + 40 : baseHeight;

  return (
    <div
      onClick={() => SetIsExpanded(!isExpanded)}
      className="h-fit p-2 relative rounded-2xl cursor-pointer"
      // className="py-6 px-4 relative rounded-2xl cursor-pointer bg-gray-800 transition-all duration-500 ease-in-out"
      style={{ height: `${expandedHeight}px` }}
    >
      <Image
        src={item.backgroud}
        width={390}
        height={271}
        className="relative z-0 w-full h-full object-contain object-center "
        alt="image"
      />
      <div
        className={`items-center transition-all ease-in-out duration-500 absolute z-30 w-full 
          ${isExpanded ? "top-1/4" : "top-1/2 transform -translate-y-1/2"}`}
      >
        <div className="text-white text-base xl:text-xl 2xl:text-2xl font-semibold font-montserrat text-center">
          {item.header}
        </div>
      </div>
      <div
        className={`transition-all ease-in-out duration-500 absolute z-30 w-full text-center 
          ${isExpanded ? "visible top-1/2 transform -translate-y-1/2" : "invisible"}`}
      >
        <p className="px-2 text-white text-base xl:text-xl 2xl:text-2xl font-light font-openSans">
          {item.element}
        </p>
      </div>
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isExpanded ? "hidden" : ""}`}
      >
        <Down />
      </div>
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isExpanded ? "" : "hidden"}`}
      >
        <Up />
      </div>
    </div>
  );
};  