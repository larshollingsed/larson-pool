import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import ListingRow from '../ListingRow/ListingRow';


const mockPlayers = [
  {
    name: 'Lars',
    points: 0,
    picks: [
      { rank: '3', teamId: '2' },
      { rank: '2', teamId: '4' },
      { rank: '1', teamId: '6' },
    ],
  },
  {
    name: 'Trey',
    points: 0,
    picks: [
      { rank: '3', teamId: '1' },
      { rank: '2', teamId: '3' },
      { rank: '1', teamId: '5' },
    ],
  },
];

const mockWinners = [
  { id: '1' },
];

const calculatePoints = (winners) => {
  mockPlayers.forEach(p => p.points = 0)
  return mockPlayers.map(player => {
    player.picks.forEach((pick) => {
      const { rank, teamId } = pick;
      const isWinner = winners.find(team => team.id === teamId);
      console.log(isWinner)
      player.points += isWinner ? parseInt(rank, 10) : 0;
    });
    return player;
  });
};

const Listings = () => {


  return (
    <Grid border="1px solid" p="10px" m="10px" templateColumns="1fr 1fr 1fr">
      <GridItem>
        <Text fontSize="3xl" marginRight="10px">Name</Text>
      </GridItem>
      <GridItem>
        <Text fontSize="3xl" marginRight="10px">Points</Text>
      </GridItem>
      <GridItem>
        <Text fontSize="3xl" marginRight="10px">Points Remaining</Text>
      </GridItem>
      {calculatePoints(mockWinners).map(player => <ListingRow {...player} />)}
    </Grid>
  );
}

export default Listings;
