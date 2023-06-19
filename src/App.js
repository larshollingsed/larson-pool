import { ChakraProvider } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';
import SelectionForm from './components/SelectionForm/SelectionForm.js';
import FormProvider from './contexts/FormProvider.js'

function App() {
  return (
    <div>
      <ChakraProvider>
        <FormProvider>
          <SelectionForm />
        </FormProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
