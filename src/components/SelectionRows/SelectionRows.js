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
import RankView from '../RankView/RankView';
import GameView from '../GameView/GameView';

const SelectionRows = ({
  // name,
  // location,
  // date,
  // time,
  // spread,
  // teams,
  // index,
}) => {
  const [showRankView, setShowRankView] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeView = () => setShowRankView(!showRankView);

  const rows  = showRankView ? <RankView /> : <GameView />;

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
      <Button
        style={{ width: '100%', marginTop: '20px'}}
        size="lg" 
        backgroundColor="blue"
        color="white"
        onClick={changeView}
      >
        {showRankView ? 'See Game View' : 'See Rank View'}
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