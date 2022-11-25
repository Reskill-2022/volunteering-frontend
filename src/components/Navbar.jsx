import {
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Slide,
  useDisclosure,
} from '@chakra-ui/react';
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const MobileNav = ({ show, children }) => {
    return (
      <Slide direction="right" in={isOpen} style={{ zIndex: 10, width: '70%' }}>
        <Flex
          bg="whiteAlpha.300"
          backdropFilter="blur(15px)"
          boxShadow="md"
          flexDir="column"
          h="full"
        >
          <Flex
            justify="center"
            align="center"
            padding={8}
            pb={2}
            onClick={onToggle}
            alignSelf="flex-end"
          >
            <Icon as={FaTimes} boxSize={7} />
          </Flex>
          <Flex flexDirection="column" padding={4} px={6} align="flex-start">
            {children}
          </Flex>
        </Flex>
      </Slide>
    );
  };

  const NavLinks = ({ links, mar, mobile }) => {
    return (
      <>
        {links.map(({ text, url }) => {
          return (
            <Link href={url} key={url} margin={mar || '0 0.5rem'}>
              <Button
                variant="link"
                color="black"
                colorScheme="blue"
                w="full"
                fontSize={mobile ? '2xl' : ''}
                fontWeight={mobile ? 700 : ''}
              >
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
      <Flex align="center" display={['none', null, 'flex']}>
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
      </Flex>
      <Flex display={['flex', null, 'none']} flexDir="column" pos="relative">
        <Flex justify="center" align="center" padding={1.5} onClick={onToggle}>
          <Icon as={FaBars} boxSize={7} />
        </Flex>
        <MobileNav>
          <NavLinks
            links={[
              {
                text: 'Learn More',
                url: 'https://reskillamericans.org/learn-more',
              },
              { text: 'Partner', url: 'https://reskillamericans.org/partner' },
              { text: 'Donate', url: 'https://reskillamericans.org/donate' },
              {
                text: 'About Us',
                url: 'https://reskillamericans.org/about-us',
              },
              { text: 'News', url: 'https://reskillamericans.org/news' },
              { text: 'FAQs', url: 'https://reskillamericans.org/faqs' },
            ]}
            mar="8px 0"
            mobile
          />
        </MobileNav>
      </Flex>
    </Flex>
  );
};

export default Navbar;
