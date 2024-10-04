import React from "react";
import Image, { StaticImageData } from "next/image";
import { Down } from "../../public/landingPage/icons/Down";
import { Up } from "../../public/landingPage/icons/Up";

type AccordionCardProps = {
  datas: {
    backgroud: StaticImageData | string;
    header: string;
    element: string;
  };
  isExpanded: boolean;
  onClick: () => void;
};

export const AccordionCard: React.FC<AccordionCardProps> = ({ datas, isExpanded, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl cursor-pointer transition-all duration-700 ease-in-out w-full h-[180px] sm:h-[180px] lg:h-[220px] 2xl:h-[280px] ${isExpanded ? 'h-[230px] sm:h-[230px] lg:h-[260px] 2xl:h-[300px]' : ''}`}
    >
      <Image
        src={datas.backgroud}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}  
        sizes="(max-width: 1024px) 50vw, (max-width: 1536px) 25vw"
        className="relative z-0 w-full h-full rounded-2xl"
        alt="image"
      />
      
      {isExpanded && (
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl z-10"></div>
      )}
      <div
        className={`items-center transition-all ease-in-out duration-700 absolute z-30 w-full 
          ${isExpanded ? "top-1/4" : "top-1/2 transform -translate-y-1/2"}`}
      >
        <div className="text-white text-base xl:text-xl 2xl:text-2xl font-semibold font-montserrat text-center">
          {datas.header}
        </div>
      </div>
      <div
        className={`transition-all ease-in-out duration-700 absolute z-30 w-full text-left
          ${isExpanded ? "mt-4 xl:mt-6 visible top-1/2 transform -translate-y-1/2 opacity-100" : "visible top-2/3 transform translate-y-6 opacity-0"}`}
      >
        <p className="px-2 text-white text-base font-light lg:font-normal xl:text-xl xl:font-semibold font-openSans">
          {datas.element}
        </p>
      </div>
      
      <div
        className={`z-50 absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isExpanded ? "hidden" : ""}`}
      >
        <Down />
      </div>
      <div
        className={`z-50 absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isExpanded ? "" : "hidden"}`}
      >
        <Up />
      </div>
    </div>
  );
};