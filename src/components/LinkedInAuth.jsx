import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import linkedInSinIn from '../assets/signin-linkedin.png';

const LinkedInAuth = () => {
  const [authCode, setAuthCode] = useState('');
  const [queryState, setQueryState] = useState('');
  // const [username, setUsername] = useState('John Doe');
  // const [emailAddress, setEmailAddress] = useState('johndoe@example.email');

  useEffect(() => {
    // const getAccessToken = () => {
    //   fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: new URLSearchParams({
    //       grant_type: 'authorization_code',
    //       code: authCode,
    //       redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    //       client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    //       client_secret: process.env.REACT_APP_CLIENT_SECRET,
    //     }),
    //   })
    //     // .then(response => response.json())
    //     .then(data => {
    //       console.log('access token', data);
    //     })
    //     .catch(error => {
    //       console.log('error fetching token', error);
    //     });
    // };

    // store query param value
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    const receivedAuthCode = params.code;
    const receivedState = params.state;
    console.log('receivedAuthCode', receivedAuthCode);
    console.log('receivedState', receivedState);

    if (receivedAuthCode !== '') {
      setAuthCode(receivedAuthCode);
    }
    if (receivedState !== '') {
      setQueryState(receivedState);
    }

    if (queryState === process.env.REACT_APP_LINKEDIN_AUTH_STATE) {
      const dataToDb = {
        code: authCode,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      };
      sendAuthorisationCode(dataToDb);
      // getAccessToken();
    }
  }, [authCode, queryState]);

  const sendAuthorisationCode = data => {
    fetch('https://api.reskillamericans.org/volunteering/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        // alert('Sent successfully!');
        // setLoading(false);
        console.log('codes sent', data);

        // setUsername()
        // setEmailAddress()
      })
      .catch(error => {
        // setLoading(false);
        console.log('error when sending', error);
      });
  };

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
          <Link
            // href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=${process.env.REACT_APP_LINKEDIN_AUTH_STATE}&scope=r_liteprofile&r_emailaddress&w_member_social`}
            href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&state=${process.env.REACT_APP_LINKEDIN_AUTH_STATE}&scope=r_liteprofile&r_emailaddress`}
          >
            <Image src={linkedInSinIn} alt="" h={10} w={216} my={3} />
          </Link>
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
          <Heading size="md" my={3} mt={4}>
            Sign in with LinkedIn
          </Heading>
          <Flex justify="space-between" align="flex-end">
            <Box pl={3}>
              {/* <Text>Name: {username}</Text>
              <Text>Email: {emailAddress}</Text> */}
            </Box>
            <Text color="red">Sign out</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LinkedInAuth;
