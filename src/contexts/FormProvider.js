import { useForm, FormProvider as ReactHookProvider } from 'react-hook-form';
import defaultValues from '../mocks/defaultValues';

const FormProvider = ({ children }) => {
  const methods = useForm({ defaultValues });
  
  return (
    <ReactHookProvider { ...methods }>
      {children}
    </ReactHookProvider>
  );
};

export default FormProvider;
