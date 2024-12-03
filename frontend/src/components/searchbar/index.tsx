'use client';

import React, { useState, useEffect } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import Image from 'next/image';
import useDebounce from '@/hooks/useDebounce';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { SearchGame } from '@/types';


export default function GameSearchComponent() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [games, setGames] = useState<SearchGame[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchValue, 500);

  useEffect(() => {
    async function searchGames() {
      if (!debouncedSearchTerm || debouncedSearchTerm.trim().length < 2) {
        setGames([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/games-search?query=${encodeURIComponent(debouncedSearchTerm)}`
        );

        if (!response.ok) {
          throw new Error('Error on fetch');
        }

        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetchig games:', error);
        setGames([]);
      } finally {
        setIsLoading(false);
      }
    }

    searchGames();
  }, [debouncedSearchTerm]);

  const handleSelectedGame = (slug: string) => {
    router.push(`/${slug}`)
  };

  return (
    <div className="flex justify-center relative">
      <Command
        className={`w-[358px] ${
          searchValue ? 'rounded-t-2xl rounded-b-none ' : 'rounded-2xl'
        } border-gray-400 border-[#FF00AE33] border-[1px]`}
      >
        <div className="relative">
          <CommandInput
            placeholder="Search games..."
            className="placeholder:text-pink-200"
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            onClick={() => {
              setSearchValue('');
            }}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear</span>
          </Button>
        </div>
        <CommandList
          className={`absolute z-50 top-full left-0 w-full bg-white shadow-lg max-h-[300px] overflow-y-auto ${
            searchValue
              ? 'rounded-b-2xl border-gray-400 border-[#FF00AE33] border-[1px] border-t-0'
              : 'border-t-0'
          } `}
        >
          {isLoading && <CommandEmpty>Searching...</CommandEmpty>}

          {!isLoading && games.length === 0 && searchValue.trim() !== '' && (
            <CommandEmpty>No results</CommandEmpty>
          )}

          {games.length > 0 && (
            <CommandGroup>
              {games.map((game) => (
                <CommandItem
                  key={game.id}
                  value={game.name}
                  onSelect={() => handleSelectedGame(game.slug)}
                  className="hover:bg-gray-100 flex items-center space-x-2 cursor-pointer"
                >
                  {game.cover ? (
                    <Image
                      src={`https:${game.cover.url}`}
                      alt={game.name}
                      width={40}
                      height={60}
                      className="rounded"
                    />
                  ) : (
                    <div className="w-[40px] h-[40px] bg-slate-200"></div>
                  )}
                  <div>
                    <span>{game.name}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
