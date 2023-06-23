import React from 'react';
import { Button } from '@chakra-ui/react';
import SelectionForm from '../SelectionForm/SelectionForm';
import Listings from '../Listings/Listings';

const Layout = () => {
  const [form, setForm] = React.useState(true);
  return (
    <div>
      <Button onClick={() => setForm(!form)}>Toggle Form</Button>
      {form ? <SelectionForm /> : <Listings />}
    </div>
  );
};

export default Layout;
