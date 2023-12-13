import React, { useRef } from 'react';
import { Button, GridItem, Select, Text, Flex, useOutsideClick } from '@chakra-ui/react';
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
  const ref = useRef();
  // useOutsideClick({
  //   ref,
  //   handler: setIsEditing,
  // });

  if (!selectedTeam || isEditing) {
    return (
      <>
        <GridItem colSpan={2}>
          <Text fontSize="96" marginRight="10px">{rank}</Text>
        </GridItem>
        <GridItem>
          <Select key={rank} {...selectProps} onChange={onChange(rank)} value={getValue(rank) || undefined} ref={ref}>
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
        <Text fontSize="96px" marginRight="10px">{rank}</Text>
      </GridItem>
      <GridItem style={{ display: 'flex', alignItems: 'center' }} m="10px">
        <Flex direction={{ base: 'column', sm: 'row' }}>
          <img src={selectedTeam.logo} style={{ display: 'inline-block', width: '80px', height: '80px', marginRight: '15px' }}/>
          <div>
            <Text marginRight="10px" fontSize={{ md: '2xl', base: 'md' }}>{selectedTeam.name}</Text>
            <Text marginRight="10px" fontSize={{ md: 'lg', base: 'sm' }}>{selectedTeam.school}</Text>
          </div>
        </Flex>
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
