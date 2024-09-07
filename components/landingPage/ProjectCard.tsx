import React from "react";
import Image, { StaticImageData } from "next/image";
import { NorthEastIcon } from "../../public/landingPage/icons/NorthEastIcon";

type CustomCardProps = {
  background: StaticImageData | string;
  title: string;
  element: string;
  link: string;
  borderColor: string;
};

export const ProjectCard: React.FC<CustomCardProps> = ({ background, title, element, link, borderColor }) => {
  return (
    <div className="w-full sm:w-2/3 lg:w-full mx-auto rounded-b-2xl overflow-hidden flex flex-col">
      <div className="relative w-full h-[215px] md:h-[363px] lg:h-[174px] xl:h-[210px] 2xl:h-[311px]">
        <Image
          src={background}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 1024px) 66vw, (max-width: 1536px) 33vw"
          className={`absolute top-0 left-0 w-full h-full rounded-t-full border-t-2 border-x-2 ${borderColor}`}
          alt={title}
        />
      </div>

      <div className={`p-6 text-center bg-white text-black rounded-b-2xl flex-grow flex flex-col justify-between border-b-2 border-x-2 ${borderColor}`}>
        <div>
          <h3 className="text-center text-xl font-semibold font-openSans">{title}</h3>
          <p className="mt-4 text-base font-light font-openSans">{element}</p>
        </div>
        <a href={link}>
          <div className="mt-8 inline-flex items-center justify-center text-base font-normal">
            Go to Website <span className="ml-2 text-black"><NorthEastIcon /></span>
          </div>
        </a>
      </div>
    </div>
  );
};