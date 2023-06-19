import { length } from './mockGames';

const getTeams = () => {
  return Array.from({ length }, (_, i) => ({ rank: length - i}))
}

const defaultValues = {
  teams: getTeams(),
  // teams: [
  //   { rank: 15 },
  //   { rank: 14 },
  //   { rank: 13 },
  //   { rank: 12 },
  //   { rank: 11 },
  //   { rank: 10 },
  //   { rank: 9 },
  //   { rank: 8 },
  //   { rank: 7 },
  //   { rank: 6 },
  //   { rank: 5 },
  //   { rank: 4 },
  //   { rank: 3 },
  //   { rank: 2 },
  //   { rank: 1 },
  // ],
};

export default defaultValues;
