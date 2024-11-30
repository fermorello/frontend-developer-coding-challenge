import { IPersistedGame } from '@/types';

export class PersistedGame implements IPersistedGame {
  id: number;
  name: string;
  first_release_date: number;
  cover?: { url: string } | undefined;
  slug: string;
  saved_date: number;

  constructor({
    id,
    name,
    first_release_date,
    cover,
    slug,
  }: Omit<IPersistedGame, 'saved_date'>) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.first_release_date = first_release_date;
    this.slug = slug;
    this.saved_date = new Date().getTime();
  }
}
