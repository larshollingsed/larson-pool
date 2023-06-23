import React from 'react';
import { Button, Grid, GridItem, Select, Text } from '@chakra-ui/react';

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
          <Text fontSize="3xl" marginRight="10px">{rank}</Text>
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

  return (
    <>
      <GridItem>
        <Text as="span" fontSize="3xl" marginRight="10px">{rank}</Text>
      </GridItem>
      <GridItem style={{ display: 'flex', alignContent: 'middle' }}>
        <Text as="span" marginRight="10px" fontSize="2xl">{selectedTeam.name}</Text>
        <img src={selectedTeam.logo} width="50px" style={{ display: 'inline-block' }}/>
      </GridItem>
      <GridItem>
        <Button onClick={() => setIsEditing(rank)}>
          Change Team
        </Button>
      </GridItem>
    </>
  )
};

export default SelectionRow;
