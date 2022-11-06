import { Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import LinkedInAuth from './components/LinkedInAuth';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <Box
      // TODO delete bg
      bg="white"
    >
      <Navbar />
      <Title />
      <LinkedInAuth />
      <Footer />
    </Box>
  );
}

export default App;
