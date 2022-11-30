import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import linkedInSinIn from '../assets/signin-linkedin.png';

const LinkedInAuth = ({ setLinkedInAuth, emailAddress, setEmailAddress }) => {
  const [authCode, setAuthCode] = useState('');
  const [queryState, setQueryState] = useState('');
  const [username, setUsername] = useState('John Doe');
  const [hasEnrolled, setHasEnrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sendAuthorisationCode = data => {
      setLoading(true);
      fetch('https://api.reskillamericans.org/volunteering/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          setLinkedInAuth(true);

          const { name, email, enrolled } = data.payload;

          setUsername(name);
          setEmailAddress(email);

          if (enrolled) {
            setHasEnrolled(true);
          }
        })
        .catch(error => {
          setLoading(false);
          console.log(error);
        });
    };

    // store query param value
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    const receivedAuthCode = params.code;
    const receivedState = params.state;

    if (receivedAuthCode !== null) {
      setAuthCode(receivedAuthCode);
    }
    if (receivedState !== null) {
      setQueryState(receivedState);
    }

    if (queryState === process.env.REACT_APP_LINKEDIN_AUTH_STATE) {
      const dataToDb = {
        code: authCode,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      };
      sendAuthorisationCode(dataToDb);
    }
  }, [authCode, queryState, setLinkedInAuth, setEmailAddress]);

  return (
    <Box w="full">
      <Flex
        justify="space-between"
        align="center"
        maxW={1200}
        margin="0 auto"
        padding="24px"
      >
        <Flex
          flexDir="column"
          maxW={800}
          w="full"
          margin="0 auto"
          padding={4}
          borderTop="3px solid"
          borderBottom="3px solid"
          borderColor="#4563ac"
        >
          <Heading size="md">Sign In to Reskill Americans</Heading>
          <Flex alignItems="center">
            <Link
              href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=${process.env.REACT_APP_LINKEDIN_AUTH_STATE}&scope=r_emailaddress,r_liteprofile`}
            >
              <Image src={linkedInSinIn} alt="" h={10} w={216} my={3} />
            </Link>
            {loading && <Spinner ml={5} />}
          </Flex>
          <Text>
            Reskill Americans uses LinkedIn as our primary identity provider.
          </Text>
          <Text>
            If you don't yet have a LinkedIn account, you can{' '}
            <Link href="https://www.linkedin.com/signup" color="blue">
              sign up here
            </Link>
            .
          </Text>
          <Flex align="center" justify="space-between">
            <Heading size="md" my={3} mt={4}>
              Sign in with LinkedIn
            </Heading>
            {hasEnrolled && <Text>You have already signed up.</Text>}
          </Flex>
          <Flex justify="space-between" align="flex-end">
            <Box pl={3}>
              <Text>Name: {username} </Text>
              <Text>Email: {emailAddress} </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LinkedInAuth;
