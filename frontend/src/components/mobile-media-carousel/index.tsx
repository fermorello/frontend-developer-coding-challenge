import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Game } from '@/types';
import Image from 'next/image';

interface MediaCarouselProps {
  game: Game;
}

function MediaCarousel({ game }: MediaCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="w-full space-x-2 px-8">
        {game?.screenshots
          .map((screenshot: { id: number; url: string }) => (
            <Image
              key={screenshot.id}
              src={`https:${screenshot.url.replace('t_thumb', 't_thumb')}`}
              alt={game.name}
              width={132.8}
              height={132.8}
              className="rounded-lg w-[82.5px] h-[110px] md:w-[132.8px] md:h-[132.8px]"
            />
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MediaCarousel;
