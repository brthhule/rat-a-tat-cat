import {ArchivedGame} from './ArchivedGame'

export interface Player {
    name: string;
    gamesWon: number;
    games: Array<ArchivedGame>
  }