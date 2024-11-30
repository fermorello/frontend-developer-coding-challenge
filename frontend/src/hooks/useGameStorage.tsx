'use client';
import { PersistedGame } from '@/entities/PersistedGame';
import { FilterEnum } from '@/types';
import { useState, useEffect } from 'react';

export const useGameStorage = () => {
  const [savedGames, setSavedGames] = useState<PersistedGame[]>([]);

  useEffect(() => {
    const storedGames = localStorage.getItem('savedGames');
    if (storedGames) {
      setSavedGames(JSON.parse(storedGames));
    }
  }, []);

  const addGame = (game: PersistedGame) => {
    const isGameAlreadySaved = savedGames.some(
      (savedGame) => savedGame.id === game.id
    );

    if (!isGameAlreadySaved) {
      const updatedGames = [game, ...savedGames];
      setSavedGames(updatedGames);
      localStorage.setItem('savedGames', JSON.stringify(updatedGames));
    }
  };

  const removeGame = (gameId: number) => {
    const updatedGames = savedGames.filter((game) => game.id !== gameId);
    setSavedGames(updatedGames);
    localStorage.setItem('savedGames', JSON.stringify(updatedGames));
  };

  const isGameSaved = (gameId: number) => {
    return savedGames.some((game) => game.id === gameId);
  };

  const filterGames = (f: FilterEnum) => {
    let sortedGames;

    switch (f) {
      case FilterEnum.LAST_ADDED:
        sortedGames = [...savedGames].sort(
          (a, b) => b.saved_date! - a.saved_date!
        );
        return setSavedGames(sortedGames);

      case FilterEnum.NEWEST:
        sortedGames = [...savedGames].sort((a, b) => {
          const dateA = a.first_release_date;
          const dateB = b.first_release_date;
          if (dateA && dateB) {
            return b.first_release_date - a.first_release_date;
          }
          return 0;
        });
        return setSavedGames(sortedGames);

      case FilterEnum.OLDEST:
        sortedGames = [...savedGames].sort((a, b) => {
          const dateA = a.first_release_date;
          const dateB = b.first_release_date;
          if (dateA && dateB) {
            return a.first_release_date - b.first_release_date;
          }
          return 0;
        });
        return setSavedGames(sortedGames);

      default:
        return;
    }
  };

  return {
    savedGames,
    addGame,
    removeGame,
    isGameSaved,
    filterGames,
  };
};
