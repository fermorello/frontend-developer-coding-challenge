import React from 'react';
import Image from 'next/image';
import MyLogo from '../../../public/images/Frame.svg';

const Logo = () => (
  <div className="h-[24px] w-[24px] flex items-center justify-center p-1 rounded-lg border border-pink-600 animate-fadeInUpShort shadow-md">
    <Image priority src={MyLogo} alt="Logo" />
  </div>
);

export default Logo;
