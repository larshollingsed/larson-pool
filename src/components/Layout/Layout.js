import React from 'react';
import { Button } from '@chakra-ui/react';
import SelectionForm from '../SelectionForm/SelectionForm';
import Listings from '../Listings/Listings';
import Info from '../Info/Info';

const Layout = () => {
  const [form, setForm] = React.useState(true);
  return (
    <div>
      {/* <Button onClick={() => setForm(!form)}>Toggle Form</Button> */}
      <Info />
      {form ? <SelectionForm /> : <Listings />}
    </div>
  );
};

export default Layout;
