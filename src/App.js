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
  const [emailAddress, setEmailAddress] = useState('example@email.com');

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
                <LinkedInAuth
                  setLinkedInAuth={setLinkedInAuth}
                  setEmailAddress={setEmailAddress}
                  emailAddress={emailAddress}
                />
                <Form linkedInAuth={linkedInAuth} emailAddress={emailAddress} />
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
