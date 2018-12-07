import {Team} from './Team';

export class Match {

  id: number;
  equipe1: Team;
  equipe2: Team;
  date: string;
  heure: string;
  place: string;
  idArbitre1: number;
  idArbitre2: number;
  idArbitre3: number;
  idCommissaire: number;
}
