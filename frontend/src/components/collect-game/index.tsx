'use client';
import React from 'react';
import { Game } from '@/types';
import { Button } from '../ui/button';
import { useGameStorage } from '@/hooks/useGameStorage';
import { PersistedGame } from '@/entities/PersistedGame';

interface CollectGameButtonProps {
  game: Game;
}

function CollectGameButton({ game }: CollectGameButtonProps) {
  const { addGame, isGameSaved } = useGameStorage();
  const itsCollected = isGameSaved(game.id);
  const handleCollect = () => {
    if (!itsCollected) {
      addGame(new PersistedGame({ ...game }));
    } else {
      return;
    }
  };
  return (
    <div>
      <Button onClick={handleCollect} disabled={Boolean(itsCollected)}>
        {Boolean(itsCollected) ? 'Game Collected' : 'Collect Game'}
      </Button>
    </div>
  );
}

export default CollectGameButton;
