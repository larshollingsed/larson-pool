import React from 'react';
import { Button, Grid, GridItem, Select, Text } from '@chakra-ui/react';
import { getGameByTeamId } from '../../mocks/mockGames';

const SelectionRow = ({
  rank,
  selectedTeam,
  onChange,
  allTeams,
  getValue,
  selectProps,
  isEditing,
  setIsEditing,
  selectOptions,
}) => {
  if (!selectedTeam || isEditing) {
    return (
      <>
        <GridItem colSpan={2}>
          <Text fontSize="96" bold marginRight="10px">{rank}</Text>
        </GridItem>
        <GridItem>
          <Select key={rank} {...selectProps} onChange={onChange(rank)} value={getValue(rank) || undefined}>
            <option value="">Select a team</option>
            {selectOptions}
          </Select>
        </GridItem>
      </>
    );
  }

  const game = getGameByTeamId(selectedTeam.id);

  return (
    <>
      <GridItem
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text fontSize="96px" bold marginRight="10px">{rank}</Text>
      </GridItem>
      <GridItem style={{ display: 'flex', alignItems: 'center' }} m="10px">
        <img src={selectedTeam.logo} style={{ display: 'inline-block', width: '80px', height: '80px', marginRight: '15px' }}/>
        <div>
          <Text marginRight="10px" fontSize="2xl">{selectedTeam.name}</Text>
          <Text marginRight="10px" fontSize="lg">{selectedTeam.school}</Text>
        </div>
      </GridItem>
      <GridItem
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button onClick={() => setIsEditing(rank)}>
          Change Team
        </Button>
      </GridItem>
    </>
  )
};

export default SelectionRow;
