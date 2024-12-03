import { Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { PersistedGame } from '@/entities/PersistedGame';

interface GameCardProps {
  game: PersistedGame;
  onRemove: (id: PersistedGame['id']) => void;
  isRemoving?: boolean;
}

function GameCard({ game, onRemove, isRemoving = false }: GameCardProps) {
  return (
    <div 
      className={`
        relative transition-all duration-300 ease-in-out
        ${isRemoving ? 'opacity-0 scale-90 translate-y-4' : ''}
      `}
    >
      <Link href={`/${game.slug}`}>
        <Image
          width={114}
          height={152}
          src={`https:${game.cover?.url.replace('t_thumb', 't_cover_big')}`}
          alt="Portada del juego"
          className="rounded-xl"
          loading="lazy"
        />
      </Link>
      <Button
        variant="default"
        className="absolute z-1 bottom-2 right-2 bg-[#FFFFFFD9] p-2 rounded-full focus-visible:bg-[#FFFFFFD9]"
        onClick={() => onRemove(game.id)}
      >
        <Trash size={15} color="black" />
      </Button>
    </div>
  );
}

export default GameCard;