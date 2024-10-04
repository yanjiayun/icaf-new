import React, { ReactNode, ReactElement } from 'react';
import Link from 'next/link';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  link: string;
  icon?: ReactElement;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ bgColor, textColor, link, icon, children }) => {
  return (
    <Link href={link} className={`font-openSans w-fit inline-flex items-center justify-center text-center px-6 py-4 border border-transparent text-base font-semibold rounded-full shadow-sm cursor-pointer ${bgColor} ${textColor}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};

export default Button;