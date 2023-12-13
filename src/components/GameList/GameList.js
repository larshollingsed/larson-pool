import React from 'react';
import mockGames from '../../mocks/mockGames';
import GameRow from '../GameRow/GameRow';

const GameList = () => (
  <>
    {mockGames.map((game) => <GameRow {...game} />)}
  </>
);

export default GameList;