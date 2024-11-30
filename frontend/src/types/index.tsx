export interface Game {
  id: number;
  name: string;
  cover?: { url: string };
  genres: { id: number; name: string }[];
  platforms: { id: number; name: string }[];
  first_release_date: number;
  screenshots: { id: number; url: string }[];
  similar_games: Game[];
  slug: string;
  summary: string;
  total_rating: number;
}

export type SearchGame = Pick<Game, 'id' | 'name' | 'cover' | 'slug'>;

export type IPersistedGame = Pick<
  Game,
  'id' | 'name' | 'first_release_date' | 'cover' | 'slug'
> & { saved_date: number };

export enum FilterEnum {
  LAST_ADDED = 'last_added',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}
