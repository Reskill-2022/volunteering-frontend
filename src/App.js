import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import LinkedInAuth from './components/LinkedInAuth';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Agreement from './components/Agreement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [linkedInAuth, setLinkedInAuth] = useState(false);

  return (
    <Box>
      <Navbar />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Title />
                <LinkedInAuth setLinkedInAuth={setLinkedInAuth} />
                <Form linkedInAuth={linkedInAuth} />
              </>
            }
          />
          <Route path="/agreement" element={<Agreement />} />
        </Routes>
      </Router>

      <Footer />
    </Box>
  );
}

export default App;
