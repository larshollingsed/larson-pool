import React, { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { allTeams, getSelectedTeam, getGameByTeam, getUnchosenGames, getOpposingTeamId, length, getSelectOptions } from '../../mocks/mockGames';
import {
  Button,
  Grid,
  Modal,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';
import SelectionRow from '../SelectionRow/SelectionRow';
import GameList from '../GameList/GameList';

const SelectionRows = ({
  // name,
  // location,
  // date,
  // time,
  // spread,
  // teams,
  // index,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, getValues, setValue } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    // control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'teams',
  });

  const chosenTeams = getValues('teams');

  const unChosenGames = getUnchosenGames(chosenTeams);
  const availableTeams = unChosenGames.map((game) => {
    return game.teams
  }).flat();

  const onChange2 = (rank) => (e) => {
    if (!e?.target?.value) return;
    const values = getValues('teams');

    const game = getGameByTeam(e.target.value);
    const team = getSelectedTeam(e.target.value);
    const opposingTeam = getOpposingTeamId(e.target.value);

    const newValues = values.map((value) => {

      if (value.rank === rank) {
        return {
          rank,
          ...team
        };
      } else if (value.id && (value.id === team.id || value.id === opposingTeam.id)) {
        return {
          rank: value.rank,
          value: '',
        }
      } else {
        return value;
      }
    });

    setValue('teams', newValues);
    setIsEditing(false);
  }

  const getValue = (rank) => {
    const values = getValues('teams');
    const value = values.find((value) => value.rank === rank);
    if (!value) debugger;
    return value.id;
  }

  const getSelectedTeamByRank = rank => getSelectedTeam(getValues('teams').find(val => val.rank === rank).id);


  const rows = fields.map((field, index) => {
    const rank = length - index;
    const { onChange, ...rest } = register(`teams.${index}.value`);

    const selectionRowProps = {
      rank,
      selectedTeam: getSelectedTeamByRank(rank),
      onChange: onChange2,
      allTeams,
      getValue,
      isEditing: isEditing === rank,
      setIsEditing,
      selectOptions: getSelectOptions(chosenTeams),
      selectProps: {...rest},
    }

    return (
      <Grid key={rank} templateColumns="75px 1fr 1fr" borderBottom="1px solid" borderColor="grey" p="10px" m="10px" maxWidth={{ xl: '50%' }}>
        <SelectionRow
          {...selectionRowProps}
        />
      </Grid>
    );
  });

  return (
    <>
      <Button
        style={{ width: '100%' }}
        size="lg" 
        backgroundColor="blue"
        color="white"
        onClick={onOpen}
      >
        See Games
      </Button>
      {rows}
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', lg: '2xl' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Games</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <GameList />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default SelectionRows;