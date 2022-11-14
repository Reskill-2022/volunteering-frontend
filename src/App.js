import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import LinkedInAuth from './components/LinkedInAuth';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  const [linkedInAuth, setLinkedInAuth] = useState(false);

  return (
    <Box
    // TODO delete bg
    // bg="white"
    >
      <Navbar />
      <Title />
      <LinkedInAuth setLinkedInAuth={setLinkedInAuth} />
      <Form linkedInAuth={linkedInAuth} />
      <Footer />
    </Box>
  );
}

export default App;
