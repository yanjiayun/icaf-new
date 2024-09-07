import React from "react";

interface EducationalCardProps {
  borderColor: string;
  title: string;
  description: string;
}

export const EducationalCard: React.FC<EducationalCardProps> = ({ borderColor, title, description }) => {
  return (
    <div className={`h-full text-center lg:text-left border-2 lg:border-4 ${borderColor} rounded-2xl`}> 
      <div className="p-10 lg:p-6">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-2xl xl:text-4xl">
          {title} 
        </h1>
        <p className="mt-5 font-openSans font-normal text-xl lg:text-base xl:text-xl">
          {description} 
        </p>
      </div>
    </div>
  );
};
