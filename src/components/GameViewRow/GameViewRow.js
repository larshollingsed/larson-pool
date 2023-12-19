import React, { useEffect, useState, useRef } from 'react';
import { Grid, GridItem, Text, Divider, Button, Center } from '@chakra-ui/react';
import moment from 'moment';

const GameViewRow = ({ game, options, onChange }) => {
  const [chosenTeam, setChosenTeam] = useState(null);
  const [chosenRank, setChosenRank] = useState(null);

    const getButtonProps = (idx) => ({
      margin: "0 10px 20px 0",
      sx: { border: `3px solid ${chosenTeam?.id === game.teams[idx].id ? 'blue' : 'grey'}`},
      onClick: () => setChosenTeam(game.teams[idx])
    });

    useEffect(() => {
       onChange({ rank: chosenRank, team: chosenTeam })
    }, [chosenTeam, chosenRank]);

    return (
      <div>
        <Text fontSize="xl" marginBottom="5px">{game.name}</Text>
        <Text fontSize="lg" marginBottom="5px">{game.location}</Text>
        <Text fontSize="md" marginBottom="5px">{moment(game.date).format('DD MMMM, YYYY')} - ${game.time}</Text>
        <Text fontSize="md" marginBottom="5px">{game.spread}</Text>
        <Divider size="3xl" />
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
              <Text fontSize="md" marginBottom="5px">{game.teams[0].name}</Text>
              <Text fontSize="md" marginBottom="5px">{game.teams[0].school}</Text>
              <img src={game.teams[0].logo} style={{ display: 'inline-block', width: '80px', height: '80px', marginRight: '15px' }}/>
          </GridItem>
          <GridItem>
              <Text fontSize="md" marginBottom="5px">{game.teams[1].name}</Text>
              <Text fontSize="md" marginBottom="5px">{game.teams[1].school}</Text>
              <img src={game.teams[1].logo} style={{ display: 'inline-block', width: '80px', height: '80px', marginRight: '15px' }}/>
          </GridItem>
          <GridItem> 
            <Button {...getButtonProps(0)}>
              <Text fontSize="md" marginBottom="5px">{game.teams[0].name}</Text>
            </Button>
            <Button {...getButtonProps(1)}>
              <Text fontSize="md" marginBottom="5px">{game.teams[1].name}</Text>
            </Button>
            {chosenTeam && (
              <div>
                <select onChange={(e) => setChosenRank(e.target.value)} value={chosenRank}>
                  {options}
                </select>
              </div>
            )}
          </GridItem>
        </Grid>
        <Divider size="3xl" />
      </div>
    );
  };

export default GameViewRow;