import React from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';


const FormFieldInput = ({ name, label }) => {
  const { register, errors } = useFormContext();
  return (
    <FormControl isInvalid={errors?.[name]} m="15px">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        placeholder={label}
        {...register(name, {
          required: 'This is required',
          minLength: { value: 4, message: 'Minimum length should be 4' },
        })}
      />
      <FormErrorMessage>
        {errors?.[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormFieldInput;
