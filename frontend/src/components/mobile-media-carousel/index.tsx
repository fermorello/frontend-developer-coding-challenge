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
    <Carousel className="relative w-full flex justify-start">
      <CarouselContent className="w-full space-x-2">
        {game?.screenshots.map((screenshot: { id: number; url: string }) => (
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
      <div className="absolute top-1/2 left-[-10px] flex items-center justify-center">
        <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
      </div>
      <div className="absolute top-1/2 right-[-10px] flex items-center justify-center">
        <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-primary/90" />
      </div>
    </Carousel>
  );
}

export default MediaCarousel;
