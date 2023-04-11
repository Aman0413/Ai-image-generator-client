import { Container, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <>
      <Container maxW={'full'} textAlign={'center'} bgColor={'#3182ce'}>
        <Text
          fontFamily={'Dancing Script'}
          fontSize={'1.2rem'}
          cursor={'pointer'}
          color={'white'}
          py={'5'}
        >
          <a href="https://github.com/Aman0413">Made by Aman</a>
        </Text>
      </Container>
    </>
  );
}

export default Footer;
