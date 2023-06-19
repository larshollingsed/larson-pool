import React, { useState } from 'react';
import mockGames, { getChosenGames, getSelectedTeam } from '../../mocks/mockGames';
import SelectionRows from '../SelectionRows/SelectionRows';

const SelectionForm = () => {
  const [selectedTeams, setSelectedTeams] = React.useState([])
  const total = mockGames.length;
  const chosenGames = getChosenGames(selectedTeams);

  const onChange = (e) => {
    const asdf = getSelectedTeam;
    debugger;
  }
  return (
    <div>
      <h1>Selection Form</h1>
      <h2>Enter your selection</h2>
      <SelectionRows />
    </div>
  );
};

export default SelectionForm;