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
  // return (
  //   <select>
  //     {getSelectOptions()}
  //   </select>
  // );

  if (!selectedTeam || isEditing) {
    return (
      <>
        <GridItem colSpan={2}>
          <Text fontSize="2xl" marginRight="10px">{rank}</Text>
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
        <Text as="span" fontSize="2xl" marginRight="10px">{rank}</Text>
      </GridItem>
          <GridItem>
            <Text as="span">{selectedTeam.name}</Text>
            <img src={selectedTeam.logo} />
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
