export type TeamType = {
  id: number;
  teamName: string;
  logo: string;
  founded: number;
  stadium: string;
  coach: string;
  president: string;
  website: string;
  league: string;
  country: string;
  city: string;
  statistics: { wins: number; losses: number; draws: number };
};

export type PlayerType = {
  id: number;
  name: string;
  position: string;
  number: number;
  country: string;
  age: number;
  height: number;
  weight: number;
  games: number;
  goals: number;
};