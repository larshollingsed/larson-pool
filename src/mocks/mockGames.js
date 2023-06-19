const mock = [
  {
    name: 'Kitten Bowl',
    location: 'Omaha, NE',
    date: '2024-02-03',
    time: '12:00 PM',
    spread: '20-2',
    teams: [
      {
        id: '1',
        name: 'Persians',
        school: 'University of Persia',
        logo: 'https://placekitten.com/200/200',
        record: '10-0',
        favorite: true,
      },
      {
        id: '2',
        name: 'Siamese',
        school: 'University of Siam',
        logo: 'https://placekitten.com/199/199',
        record: '9-1',
      },
    ],
  },
  {
    name: 'Puppy Bowl',
    location: 'Chicago, IL',
    date: '2024-02-04',
    time: '11:00 AM',
    spread: '19-3',
    teams: [
      {
        id: '3',
        name: 'Labradors',
        school: 'University of Labrador',
        logo: 'https://placekitten.com/198/198',
        record: '10-0',
        favorite: true,
      },
      {
        id: '4',
        name: 'Poodles',
        school: 'University of Poodle',
        logo: 'https://placekitten.com/197/197',
        record: '9-1',
      },
    ],
  },
  // create 13 more games here
  {
    name: 'Alpha Bowl',
    location: 'Austin, TX',
    date: '2024-02-05',
    time: '10:00 AM',
    spread: '18-4',
    teams: [
      {
        id: '5',
        name: 'Spartans',
        school: 'University of Sparta',
        logo: 'https://placekitten.com/196/196',
        record: '10-0',
        favorite: true,
      },
      {
        id: '6',
        name: 'Trojans',
        school: 'University of Troy',
        logo: 'https://placekitten.com/195/195',
        record: '9-1',
      },
    ],
  },
];

export const getChosenGames = (chosenTeams) => {
  return mock.filter((game) => {
    return game.teams.find((team) => {
      return chosenTeams.find((chosenTeam) => {
        return chosenTeam.name === team.name;
      })
    });
  });
};

export const getUnchosenGames = (chosenTeams = []) => {
  return mock.filter((game) => {
    return !game.teams.find((team) => {
      return chosenTeams.find((chosenTeam) => {
        return chosenTeam.name === team.name;
      })
    });
  });
};

export const getSelectedTeam = (teamId) => {
  if (!teamId) return;
  const game =  mock.find(game => game.teams.find(team => team.id === teamId));
  return game.teams.find(team => team.id === teamId);
};

export const getGameByTeam = (teamId) => {
 return mock.find((game) => {
    return game.teams.find((team) => {
      return team.id === teamId;
    });
  });
};

export const allTeams = mock.map((game) => {
  return game.teams;
}).flat();


export const getOpposingTeamId = (teamId) => {
  const game =  mock.find(game => game.teams.find(team => team.id === teamId));
  const opposingTeam = game.teams.find(team => team.id !== teamId);
  return opposingTeam;
};

export const length = mock.length;

export const getSelectOptions = (chosenTeams = []) => {
  console.log(chosenTeams)
  const chosenGames = getChosenGames(chosenTeams);
  const unChosenGames = getUnchosenGames(chosenTeams);

  const unvailableTeams = chosenGames.map(({ teams }) => teams).flat();
  const availableTeams = unChosenGames.map(({ teams }) => teams).flat();

  return (
    <>
      <optgroup label="Unselected Teams">
        {availableTeams.map((team) => (
        <option key={team.name} value={team.id}>
          {team.name}
        </option>
        ))}
      </optgroup>
      <optgroup label="Selected Teams">
        {unvailableTeams.map((team) => (
        <option key={team.name} value={team.id}>
          {team.name}
        </option>
        ))}
      </optgroup>
    </>
  );
};

export default mock;
