import React from 'react';
import { Td, Tr } from '@chakra-ui/react';

const ListingRow = ({ name, points, pointsRemaining }) => {
  return (
    <Tr>
      <Td border="1px solid" borderColor="black">
        {name}
      </Td>
      <Td border="1px solid" borderColor="black">
        {points}
      </Td>
      <Td border="1px solid" borderColor="black">
        {pointsRemaining}
      </Td>
    </Tr>
  );
};

export default ListingRow;
