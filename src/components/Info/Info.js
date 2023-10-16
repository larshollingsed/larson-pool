import React from 'react';
import FormFieldInput from '../FormFieldInput/FormFieldInput';

const Info = ({ name, points, pointsRemaining }) => {
  return (
    <div>
      <FormFieldInput name="firstName" label="First Name" />
      <FormFieldInput name="lastName" label="Last Name" />
      <FormFieldInput name="email" label="Email" />
      <FormFieldInput name="tiebreaker" label="Tiebreaker" />
    </div>
   
  );
};

export default Info;
