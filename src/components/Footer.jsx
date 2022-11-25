import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo_white.svg';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
  FaFacebookF,
} from 'react-icons/fa';

const Footer = () => {
  const SocialMedia = ({ media }) => {
    return (
      <Flex>
        {media.map(({ url, icon }) => {
          return (
            <Link href={url} key={url} padding={1} isExternal mx={1}>
              <Flex>
                <Icon
                  as={icon}
                  boxSize={6}
                  _hover={{ transform: 'scale(1.2)' }}
                />
              </Flex>
            </Link>
          );
        })}
      </Flex>
    );
  };

  const FooterLinks = ({ links }) => {
    return (
      <SimpleGrid columns={2} spacing={4}>
        {links.map(({ name, url }) => {
          return (
            <Link href={url} key={url} mx={1}>
              <Text>{name}</Text>
            </Link>
          );
        })}
      </SimpleGrid>
    );
  };

  return (
    <Box w="full" bg="#151c2b" color="white">
      <Flex
        flexDir={['column', null, 'row']}
        justify="space-between"
        align={['flex-start', null, 'center']}
        maxW={1200}
        margin="0 auto"
        px={[6, 8]}
        py={[12, 16]}
      >
        <Box mb={[10, null, 0]}>
          <Link href="https://reskillamericans.org/" isExternal>
            <Image src={logo} alt="" h={50} />
          </Link>
          <Text my={4}>Increasing access to careers in tech.</Text>
          <SocialMedia
            media={[
              {
                url: 'https://twitter.com/ReskillAmerica',
                icon: FaTwitter,
              },
              {
                url: 'https://www.instagram.com/reskillamericans/',
                icon: FaInstagram,
              },
              {
                url: 'https://www.linkedin.com/company/reskill-americans',
                icon: FaLinkedinIn,
              },
              {
                url: 'https://www.youtube.com/c/ReskillAmericans',
                icon: FaYoutube,
              },
              {
                url: 'https://github.com/reskillamericans',
                icon: FaGithub,
              },
              {
                url: 'https://www.facebook.com/reskillamericans',
                icon: FaFacebookF,
              },
            ]}
          />
        </Box>
        <FooterLinks
          links={[
            {
              name: 'Learn More',
              url: 'https://reskillamericans.org/learn-more',
            },
            {
              name: 'Partner',
              url: 'https://reskillamericans.org/partner',
            },
            {
              name: 'Donate',
              url: 'https://reskillamericans.org/donate',
            },
            {
              name: 'Volunteer',
              url: 'https://volunteer.reskillamericans.org',
            },
            {
              name: 'About Us',
              url: 'https://reskillamericans.org/about',
            },
            {
              name: 'Contact Us',
              url: 'mailto:info@reskillamericans.org',
            },
            {
              name: 'News and Blog',
              url: 'https://reskillamericans.org/news',
            },
            {
              name: 'Privacy Policy',
              url: 'https://reskillamericans.org/privacy',
            },
            {
              name: 'FAQs',
              url: 'https://reskillamericans.org/faq',
            },
          ]}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
