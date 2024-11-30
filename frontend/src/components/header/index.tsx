import React from 'react';
import Logo from '../logo';
import SearchComponent from '../searchbar';

function Header() {
  return (
    <div className="h-[120px] flex flex-col gap-4">
      <div className="flex items-center md:justify-center gap-2">
        <Logo />
        <span className="text-[20px] bg-gradient-to-r from-[#6727A6] to-[#3C1661] inline-block text-transparent bg-clip-text font-semibold">
          Gaming Haven Z
        </span>
      </div>
      <SearchComponent />
    </div>
  );
}

export default Header;