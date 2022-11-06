import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

import linkedInSinIn from '../assets/signin-linkedin.png';

const LinkedInAuth = () => {
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
          <Image src={linkedInSinIn} alt="" h={10} w={216} my={3} />
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
              <Text>Name: Morpheus</Text>
              <Text>Email: RandomMan@mail</Text>
            </Box>
            <Text color="red">Sign out</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LinkedInAuth;
