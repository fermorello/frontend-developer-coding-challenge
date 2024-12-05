import React from 'react';
import Image from 'next/image';
import MyLogo from '../../../public/images/Frame.svg';

interface LogoProps {
  size?: number;
}

const Logo = ({ size = 24 }: LogoProps) => (
  <div className={`h-[${size}px] w-[${size}px] flex items-center justify-center p-1 rounded-lg border border-pink-600 animate-fadeInUpShort shadow-md cursor-pointer`}>
    <Image priority src={MyLogo} alt="Logo" height={size} width={size} />
  </div>
);

export default Logo;
