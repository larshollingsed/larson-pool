import { ChakraProvider } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout.js';
import FormProvider from './contexts/FormProvider.js'

function App() {
  return (
    <div>
      <ChakraProvider>
        <FormProvider>
          <Layout />
        </FormProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
