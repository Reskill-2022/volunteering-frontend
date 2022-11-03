import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Title = () => {
  return (
    <Flex justify="center" align="center" bg="brand" padding={16}>
      <Heading color="white" size="2xl">
        Reskill Americans Volunteer Application
      </Heading>{' '}
    </Flex>
  );
};

export default Title;
