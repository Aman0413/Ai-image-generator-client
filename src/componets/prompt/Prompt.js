import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axiosClient from '../../utils/axiosClient';
import demoImg from '../../assets/31284806.jpg';
import '../../index.css';
import { saveAs } from 'file-saver';
import toast, { Toaster } from 'react-hot-toast';

function Prompt() {
  const [prompt, setPrompt] = useState();
  const [image, setImage] = useState();

  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  async function handleSubmit() {
    setLoading(true);
    const res = await axiosClient.post('/api/image', {
      prompt,
    });
    const url = res.data.data[0].url;
    setImage(url);
    setLoading(false);
  }

  async function shareImage() {
    try {
      const res = await axiosClient.post('/api/post', {
        name,
        imageUrl: image,
      });

      console.log(res.data);
      setIsOpen(false);
      if (res.data.status === 'ok') {
        toast.success('Image Uploaded');
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleDownload = () => {
    let url = image;
    saveAs(url, prompt);
  };

  const handleClose = () => {
    setIsOpen(false);
    setName('');
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Container
        maxW={'full'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        py={'5'}
      >
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter your name</ModalHeader>
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={shareImage}>
                Share
              </Button>
              <Button variant="ghost" onClick={handleClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

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
                {loading ? <div className="loader"></div> : ''}
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
              <HStack justifyContent={'space-between'}>
                <Button
                  colorScheme="blue"
                  variant={'solid'}
                  onClick={handleDownload}
                >
                  Download Image
                </Button>
                <Button
                  colorScheme="green"
                  variant={'solid'}
                  onClick={() => setIsOpen(true)}
                >
                  Share Image
                </Button>
              </HStack>
            </Container>
          </VStack>
        </Container>
      </Container>
    </>
  );
}

export default Prompt;
