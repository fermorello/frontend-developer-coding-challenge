'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FilterEnum } from '@/types';

interface FilterProps {
  onFilterChange: (filter: FilterEnum) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 220);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Tabs
      defaultValue={FilterEnum.LAST_ADDED}
      className={`${isSticky ? 'sticky top-2 z-50 flex justify-center' : ''}`}
    >
      <TabsList
        className={`flex justify-start md:justify-center bg-white backdrop-blur-xl bg-opacity-50`}
      >
        <TabsTrigger
          value={FilterEnum.LAST_ADDED}
          onClick={() => onFilterChange(FilterEnum.LAST_ADDED)}
        >
          Last added
        </TabsTrigger>
        <TabsTrigger
          value={FilterEnum.NEWEST}
          onClick={() => onFilterChange(FilterEnum.NEWEST)}
        >
          Newest
        </TabsTrigger>
        <TabsTrigger
          value={FilterEnum.OLDEST}
          onClick={() => onFilterChange(FilterEnum.OLDEST)}
        >
          Oldest
        </TabsTrigger>
      </TabsList>
      <TabsContent value="filter"></TabsContent>
    </Tabs>
  );
}
