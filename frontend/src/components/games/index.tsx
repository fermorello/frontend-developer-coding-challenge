'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import NoGames from '../../../public/images/no-games.svg';
import Filter from '../filter';
import GameCard from '../game-card';
import { useGameStorage } from '@/hooks/useGameStorage';
import { Game, FilterEnum } from '@/types';
import Spinner from '../spinner';

function GamesComponent() {
  const { isLoading, removeGame, savedGames, filterGames } = useGameStorage();
  const [removingGameId, setRemovingGameId] = useState<number | null>();

  const handleRemoveGame = (id: Game['id']) => {
    setRemovingGameId(id);

    setTimeout(() => {
      removeGame(id);
      setRemovingGameId(null);
    }, 300);
  };

  const handleFilterChange = (filter: FilterEnum) => {
    filterGames(filter);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="">
      <div className="space-y-4">
        <p className="bg-gradient-to-r from-[#6727A6] to-[#3C1661] text-transparent bg-clip-text font-semibold text-[20px] md:text-center">
          Saved games
        </p>
        {!savedGames.length && (
          <div className="pt-14 space-y-2">
            <Image priority src={NoGames} alt="Logo" />
            <div className="text-center">
              <p className="text-[16px] font-semibold">Nothing Collected Yet</p>
              <p className="text-[14px]">
                Here you will see your collected games
              </p>
            </div>
          </div>
        )}
        {savedGames.length > 0 && (
          <div className="space-y-4">
            <Filter onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {savedGames.map((g) => (
                <GameCard 
                  key={g.id} 
                  game={g} 
                  onRemove={handleRemoveGame}
                  isRemoving={removingGameId === g.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamesComponent;