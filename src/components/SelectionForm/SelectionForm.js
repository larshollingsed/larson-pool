import React, { useState } from 'react';
import mockGames, { getChosenGames, getSelectedTeam } from '../../mocks/mockGames';
import SelectionRows from '../SelectionRows/SelectionRows';

const SelectionForm = () => {
  const [selectedTeams, setSelectedTeams] = React.useState([])
  const total = mockGames.length;
  const chosenGames = getChosenGames(selectedTeams);

  return (
    <SelectionRows />
  );
};

export default SelectionForm;