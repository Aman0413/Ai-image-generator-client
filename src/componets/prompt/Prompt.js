import {
  Box,
  Button,
  Container,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import demoImg from '../../assets/31284806.jpg';
import '../../index.css';
import { saveAs } from 'file-saver';

function Prompt() {
  const [prompt, setPrompt] = useState();
  const [image, setImage] = useState();

  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const res = await axiosClient.post('/api/image', {
      prompt,
    });

    const url = res.data.data[0].url;
    setImage(url);
    setLoading(false);
  }

  const handleDownload = () => {
    let url = image;
    saveAs(url, prompt);
  };

  return (
    <Container
      maxW={'full'}
      h={'100vh'}
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={'5'}
      py={'10'}
    >
      <Heading
        color={'blue.700'}
        fontFamily={'Dancing Script'}
        fontSize={['2.5rem', '3rem']}
      >
        AI Image Generator
      </Heading>
      <Container maxW={'full'}>
        <VStack w={'full'}>
          <HStack w={'full'} py={'4'}>
            <FormControl w={'full'}>
              <HStack w={'full'}>
                <Input
                  type="text"
                  placeholder="Describe the image you want to generate"
                  w={'full'}
                  onChange={e => {
                    setPrompt(e.target.value);
                  }}
                />

                <Button
                  colorScheme="blue"
                  variant={'outline'}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </HStack>
            </FormControl>
          </HStack>
          <Container
            display={'flex'}
            flexDirection={'column'}
            gap={'4'}
            w={['100vw', 'full']}
          >
            <Box
              boxSize="sm"
              w={['100%', 'full']}
              display={'flex'}
              justifyContent={'center'}
              alignContent={'center'}
              py={'4'}
              border={'1px solid gray'}
              borderRadius={'10'}
            >
              {loading ? <div class="loader"></div> : ''}
              {!loading ? (
                <Image
                  w={'98%'}
                  h={'full'}
                  src={image ? image : demoImg}
                  alt="ai-image"
                  objectFit={'fill'}
                />
              ) : (
                ''
              )}
            </Box>
            <Button
              colorScheme="blue"
              variant={'solid'}
              onClick={handleDownload}
            >
              Download Image
            </Button>
          </Container>
        </VStack>
      </Container>
      <Text
        fontFamily={'Dancing Script'}
        cursor={'pointer'}
        color={'blue.700'}
        py={'5'}
      >
        <a href="https://github.com/Aman0413">Made by Aman</a>
      </Text>
    </Container>
  );
}

export default Prompt;
