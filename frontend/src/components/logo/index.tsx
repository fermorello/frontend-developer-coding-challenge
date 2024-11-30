import React from 'react';
import Image from 'next/image';
import MyLogo from '../../../public/images/Frame.svg';

const Logo = () => (
  <div className="w-[24px] h-[24px] rounded-lg p-1 border-2 border-pink-600 bg-gradient-to-r from-[#FF00AE] to-[#FF97DE]">
    <Image priority src={MyLogo} alt="Logo" />
  </div>
);

export default Logo;
