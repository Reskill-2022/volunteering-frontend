import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import Form from './components/Form';
import LinkedInAuth from './components/LinkedInAuth';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <Box
    // TODO delete bg
    // bg="white"
    >
      <Navbar />
      <Title />
      <LinkedInAuth />
      <Form />
      <Footer />
    </Box>
  );
}

export default App;
