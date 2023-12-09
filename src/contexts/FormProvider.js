import { useForm, FormProvider as ReactHookProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import defaultValues from '../mocks/defaultValues';

const schema = yup.object({
  firstName: yup
    .string()
    .required('First name is required'),
  lastName: yup
    .string()
    .required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  tiebreaker: yup
    .number()
    .required('Tiebreaker is required'),
  });

const FormProvider = ({ children }) => {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema), mode: 'onBlur' });
  
  return (
    <ReactHookProvider { ...methods }>
      {children}
    </ReactHookProvider>
  );
};

export default FormProvider;
