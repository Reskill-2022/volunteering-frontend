import React from 'react';
import { Button, Flex, Image, Link } from '@chakra-ui/react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const NavLinks = ({ links }) => {
    return (
      <>
        {links.map(({ text, url }) => {
          return (
            <Link href={url} key={url} margin="0 0.5rem">
              <Button variant="link" color="black">
                {text}
              </Button>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      maxW={1200}
      margin="0 auto"
      padding="24px"
    >
      <Link href="https://reskillamericans.org/" isExternal>
        <Image src={logo} alt="" h={30} />
      </Link>
      <Flex align="center">
        <NavLinks
          links={[
            { text: 'Learn More', url: '/learn-more' },
            { text: 'Partner', url: '/partner' },
            { text: 'Donate', url: '/donate' },
            { text: 'About Us', url: '/about-us' },
            { text: 'News', url: '/news' },
            { text: 'FAQs', url: '/faqs' },
          ]}
        />
        <Button colorScheme="red" color="white">
          Enroll
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
