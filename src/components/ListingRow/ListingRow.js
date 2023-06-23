import React from 'react';
import { GridItem } from '@chakra-ui/react';

const ListingRow = ({ name, points, pointsRemaining }) => {
  return (
    <>
      <GridItem>
        {name}
      </GridItem>
      <GridItem>
        {points}
      </GridItem>
      <GridItem>
        {pointsRemaining}
      </GridItem>
    </>
  );
};

export default ListingRow;
