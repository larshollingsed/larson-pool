import React from 'react';
import { Text, Table, TableContainer, Tr, Td, Thead } from '@chakra-ui/react';
import ListingRow from '../ListingRow/ListingRow';


const mockPlayers = [
  {
    name: 'Lars',
    points: 0,
    pointsRemaining: 0,
    picks: [
      { rank: '3', teamId: '2' },
      { rank: '2', teamId: '4' },
      { rank: '1', teamId: '6' },
    ],
  },
  {
    name: 'Trey',
    points: 0,
    pointsRemaining: 0,
    picks: [
      { rank: '3', teamId: '1' },
      { rank: '2', teamId: '3' },
      { rank: '1', teamId: '5' },
    ],
  },
];

const mockWinners = [
  { id: '4' },
];

const calculatePoints = (winners) => {
  mockPlayers.forEach(p => p.points = 0)
  return mockPlayers.map(player => {
    player.picks.forEach((pick) => {
      const { rank, teamId } = pick;
      const isWinner = winners.find(team => team.id === teamId);
      player.points += isWinner ? parseInt(rank, 10) : 0;
    });
    return player;
  });
};

const calculatePointsRemaining = (mm, winners) => {
  mockPlayers.forEach(p => p.pointsRemaining = 0)
  return mockPlayers.map(player => {
    player.picks.forEach((pick) => {
      const { rank, teamId } = pick;
      const isWinner = winners.find(team => team.id === teamId);
      console.log(isWinner)
      player.pointsRemaining += isWinner ? parseInt(isWinner.rank, 10) || 0 : parseInt(rank, 10);
    });
    return player;
  });
};


const Listings = () => {
  return (
    <TableContainer>
      <Table border="1px solid" borderColor="black">
        <Thead>
          <Tr>
            <Td border="1px solid" borderColor="black">
              <Text fontSize="3xl" marginRight="10px">Name</Text>
            </Td>
            <Td border="1px solid" borderColor="black">
              <Text fontSize="3xl" marginRight="10px">Points</Text>
            </Td>
            <Td border="1px solid" borderColor="black">
              <Text fontSize="3xl" marginRight="10px">Points Remaining</Text>
            </Td>
          </Tr>
        </Thead>
        {calculatePointsRemaining(calculatePoints(mockWinners), mockWinners).map(player => <ListingRow {...player} />)}
      </Table>
    </TableContainer>
  );
}

export default Listings;
