import Chip from '@/components/chip';
import GameSearchComponent from '@/components/searchbar';
import { Game } from '@/types';
import { Calendar, Puzzle, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';
import BackNavigation from '@/components/back-navigation';
import CollectGameButton from '@/components/collect-game';

interface GameDetailPageProps {
  params: {
    slug: string;
  };
}

async function GameDetailPage({ params }: GameDetailPageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/game/${params.slug}`, {
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('Game not found');
  }

  const game: Game = await response.json();

  console.log('GAME', game);

  return (
    <div className="w-full md:max-w-[728px] py-20 lg:m-auto">
      <div className="flex flex-col items-start">
        <div className="flex flex-col md:flex-row md:items-center gap-4 lg:gap-24">
          <BackNavigation />
          <GameSearchComponent />
        </div>
        <div className="flex pt-16 gap-4">
          <div className="">
            {game.cover ? (
              <Image
                src={`https:${game.cover.url.replace(
                  't_thumb',
                  't_cover_big'
                )}`}
                alt={game.name}
                width={170}
                height={226}
                className="rounded-lg w-[82.5px] h-[110px] md:w-[170px] md:h-[226px]"
              />
            ) : (
              <div>No image available</div>
            )}
          </div>
          <div className="flex flex-col">
            <p className="text-[20px] md:text-[24px] font-semibold bg-gradient-to-r from-[#6727A6] to-[#3C1661] text-transparent bg-clip-text">
              {game.name}
            </p>
            <div>
              <CollectGameButton game={game} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-5">
          <Chip
            title="Rating"
            value={
              game.total_rating
                ? Number(game.total_rating / 10).toFixed(1)
                : 'Unknown'
            }
            Icon={Star}
          />
          <Chip
            title="Release"
            value={
              game?.first_release_date
                ? dayjs(game?.first_release_date).format('DD/MM/YYYY')
                : 'Unknown'
            }
            Icon={Calendar}
          />
          <Chip
            title="Genre"
            value={game?.genres?.map((g) => g.name).join(' & ')}
            Icon={Puzzle}
          />
        </div>
        <div className="space-y-2 pt-5">
          <p className="font-semibold">Summary</p>
          <h4 className="text-base font-normal">{game.summary}</h4>
        </div>
        <div className="space-y-2 pt-5">
          <p className="font-semibold">Platforms</p>
          <h4 className="text-base font-normal">
            {game?.platforms?.map((platform) => platform.name).join(', ') ??
              'Unknown'}
          </h4>
        </div>
        <div className="w-full space-y-2 pt-5">
          <p className="font-semibold">Media</p>
          <div className="grid grid-cols-5">
            {!game?.screenshots?.length && (
              <h4 className="text-base font-normal">No media to show</h4>
            )}
            {game?.screenshots?.splice(0, 5).map((screenshot) => (
              <Image
                key={screenshot.id}
                src={`https:${screenshot.url.replace('t_thumb', 't_thumb')}`}
                alt={game.name}
                width={132.8}
                height={132.8}
                className="rounded-lg w-[82.5px] h-[110px] md:w-[132.8px] md:h-[132.8px]"
              />
            ))}
          </div>
        </div>
        {game?.similar_games && (
          <div className="w-full space-y-2 pt-5">
            <p className="font-semibold bg-gradient-to-r from-[#6727A6] to-[#3C1661] text-transparent bg-clip-text">
              Similar games
            </p>
            <div className="flex justify-between">
              {game?.similar_games?.splice(0, 4).map((sg) => (
                <Link key={sg.slug} href={sg.slug}>
                  <Image
                    src={`https:${sg?.cover?.url.replace(
                      't_thumb',
                      't_logo_med'
                    )}`}
                    alt={game.name}
                    width={170}
                    height={226}
                    className="rounded-lg w-[82.5px] h-[110px] md:w-[170px] md:h-[226px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameDetailPage;
