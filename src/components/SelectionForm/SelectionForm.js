import React, { useState } from 'react';
import { Button, Center } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import mockGames, { getChosenGames, getSelectedTeam } from '../../mocks/mockGames';
import SelectionRows from '../SelectionRows/SelectionRows';

const SelectionForm = () => {
  const [loading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([])
  const total = mockGames.length;
  const chosenGames = getChosenGames(selectedTeams);
  const { getValues } = useFormContext();

  const onSubmit = () => {
    setIsLoading(true);
    const values = getValues();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
  };
  // fetch('https://larson-pool-api.vercel.app/', requestOptions)

  fetch('http://localhost:5000/', requestOptions)
      .then(response => response.json())
      .then(setIsLoading(false))
      .then(setHasSubmitted(true));
  }

  if (loading) return 'Submitting your selections...';
  if (hasSubmitted) return 'Thank you for submitting your picks! Good luck!';

  return (
    <>
      <SelectionRows />
      <Center p="15px">
        <Button onClick={onSubmit} size="lg"  type="submit" color="white" isDisabled={loading || hasSubmitted} w="90%" p="10px" bgColor="green">
          Submit
        </Button>
      </Center>
    </>
  );
};

export default SelectionForm;