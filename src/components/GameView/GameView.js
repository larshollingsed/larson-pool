import React, { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import GameViewRow from '../GameViewRow/GameViewRow';
import games, { getGameByTeamId } from '../../mocks/mockGames';


const GameView = () => {
  const { getValues } = useFormContext();
  const { fields, append, update, prepend, remove, swap, move, insert, replace } = useFieldArray({
    // control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'teams',
  });

  const teams = getValues('teams');

  const getOptions = () => {
    const chosen = [];
    const unChosen = [];
    let opts = [];

    Array.from({ length: games.length }, (_, i) => (i + 1).toString()).forEach(rank => {
      const team = teams.find(team => team.rank === rank);
      if (team) {
        chosen.push(rank);
      } else {
        unChosen.push(rank);
      }
  
      opts =  (
        <>
        <option value="">Select a rank</option>
        <optgroup label="Unselected">
          {unChosen.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
          ))}
        </optgroup>
        <optgroup label="Selected">
          {chosen.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
          ))}
        </optgroup>
      </>
      )

    });

    return opts;

  };

  const [ options, setOptions ] = useState(getOptions());


  useEffect(() => setOptions(getOptions()), [teams])

  const onChange = ({ rank, team }) => {
    if (!team || !rank) return;
    console.log(rank, team, teams)
    const foundRank = teams.findIndex(team => team.rank === rank);
    const newTeams = [...teams];
    const foundGame = getGameByTeamId(team.id);

    const teamIds = foundGame?.teams.map(team => team.id);

    const foundTeam = teams.findIndex(team => teamIds?.includes(team.id));
    // debugger

    if (foundRank > -1) {
      newTeams.splice(foundRank, 1);
    }
    if (foundTeam > -1) {
      newTeams.splice(foundTeam, 1);
    }

    newTeams.push({ rank, ...team });

    replace(newTeams);
  }

  console.log(teams)

  return games.map((game, index) => {
    // todo tom - move this to its own component, set editing state for teams and make both teams and rank.  separate already chosen ranks
    return <GameViewRow game={game} onChange={onChange} index={index} options={options}  />
  });
}

export default GameView;
