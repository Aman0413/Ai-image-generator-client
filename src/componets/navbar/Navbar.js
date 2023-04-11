import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
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
              fontSize={['1rem', '2rem']}
              fontWeight="bold"
              fontFamily={'Dancing Script'}
            >
              AI Image Generator
            </Text>
          </Link>
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          onClick={() => console.log('Mobile Menu')}
        >
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </Box>

        <Box
          display={{ base: 'none', md: 'flex' }}
          width="auto"
          alignItems="center"
        >
          <Link to={'/community'}>
            <Text mr={6}>Community Posts</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;
