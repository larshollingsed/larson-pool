import React from 'react';
import { Grid } from '@chakra-ui/react';
import FormFieldInput from '../FormFieldInput/FormFieldInput';

const Info = ({ name, points, pointsRemaining }) => {
  return (
    <Grid maxWidth={{ xl: '50%' }}>
      <FormFieldInput name="firstName" label="First Name" />
      <FormFieldInput name="lastName" label="Last Name" />
      <FormFieldInput name="email" label="Email" />
      <FormFieldInput name="tiebreaker" label="Tiebreaker" />
    </Grid>
   
  );
};

export default Info;
