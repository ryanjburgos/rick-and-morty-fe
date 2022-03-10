import { ILocation } from './location.model';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Pick<ILocation, 'name' | 'url'>;
  location: Pick<ILocation, 'name' | 'url'>;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
