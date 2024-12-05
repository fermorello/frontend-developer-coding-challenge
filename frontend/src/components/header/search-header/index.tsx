import React from 'react';
import SearchComponent from '../../searchbar';
import Header from '..';

function SearchHeader() {
  return (
    <div className="h-[120px] flex flex-col gap-4">
      <Header />
      <SearchComponent />
    </div>
  );
}

export default SearchHeader;
