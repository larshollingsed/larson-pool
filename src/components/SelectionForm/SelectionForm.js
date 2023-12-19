import React, { useState } from 'react';
import { Box, Button, Center, Divider, Text } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import mockGames, { getChosenGames, getSelectedTeam } from '../../mocks/mockGames';
import SelectionRows from '../SelectionRows/SelectionRows';
import Info from '../Info/Info';


const SelectionForm = () => {
  const [loading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([])
  // const total = mockGames.length;
  // const chosenGames = getChosenGames(selectedTeams);
  const { getValues, watch, formState: { isValid } } = useFormContext();
  // const teams = watch('teams');
  // const hasNotChosen = !!teams.filter(t => !t.school).length
  const hasNotChosen = false;

  const onSubmit = () => {
    setIsLoading(true);
    const values = getValues();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
  };
  
  // fetch('http://localhost:5000/', requestOptions)
  fetch('https://larson-pool-api.vercel.app/', requestOptions)
      .then(response => response.json())
      .then(setIsLoading(false))
      .then(setHasSubmitted(true));
  }

  let layout = (
    <>
    <Info />
      {hasNotChosen && (
        <Text color="red">
          Please choose a team and rank for each game
        </Text>
      )}
      <Divider size="3xl" orientation="horizontal" />
      <SelectionRows />
      <Center p="15px">
        <Button onClick={onSubmit} size="lg"  type="submit" color="white" isDisabled={loading || hasNotChosen || !isValid} w="90%" p="10px" bgColor="green">
          Submit
        </Button>
      </Center>
    </>
  );

  if (loading) layout =  'Submitting your selections...';
  if (hasSubmitted) layout =  'Thank you for submitting your picks! Good luck!';

  return ( 
    <Box p="20px">
      <Text fontSize="5xl" marginBottom="20px">
        Larson Holiday Football Pool 2023
      </Text>
      <Text fontSize="lg" marginBottom="20px">
        Some text about the rules Is good you understand your place in my world i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk sit in a box for hours. Meow for food, then when human fills food dish, take a few bites of food and continue meowing take a deep sniff of sock then walk around with mouth half open cats are cute, decide to want nothing to do with my owner today. Hunt anything that moves lay on arms while you're using the keyboard, and massacre a bird in the living room and then look like the cutest and most innocent animal on the planet or ignore the squirrels, you'll never catch them anyway. Hey! you the
      </Text>
      <Divider size="3xl" orientation="horizontal" />
      {layout}
    </Box>
   
  );
};

export default SelectionForm;