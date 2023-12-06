import React, { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { allTeams, getSelectedTeam, getGameByTeam, getUnchosenGames, getOpposingTeamId, length, getSelectOptions } from '../../mocks/mockGames';
import { Grid } from '@chakra-ui/react';
import SelectionRow from '../SelectionRow/SelectionRow';

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


  return (
    fields.map((field, index) => {
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
    })
  );
};

export default SelectionRows;