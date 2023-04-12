import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={6}
        bgColor={'#3182ce'}
        color="white"
        w={'full'}
      >
        <Flex align="center">
          <Box mr={4}>
            <Icon as={FaRobot} boxSize={8} />
          </Box>
          <Link to={'/'}>
            <Text
              fontSize={['1.4rem', '2rem']}
              fontWeight="bold"
              fontFamily={'Dancing Script'}
            >
              AI Image Generator
            </Text>
          </Link>
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            fill="white"
            width="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </Box>

        <Box
          display={{ base: isNavOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          mt={{ base: 4, md: 0 }}
          transition="all 0.3s ease-in-out"
          opacity={{ base: isNavOpen ? '1' : '0', md: '1' }}
          transform={{
            base: isNavOpen ? 'translateY(0)' : 'translateY(-20px)',
            md: 'none',
          }}
        >
          <Link to={'/community'}>
            <Text display="block" mr={6} mb={2}>
              Community Posts
            </Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
