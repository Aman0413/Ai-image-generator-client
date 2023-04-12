import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import axiosClient from '../../utils/axiosClient';
import toast, { Toaster } from 'react-hot-toast';

function CommunityPost() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  async function getAllPosts() {
    try {
      const res = await axiosClient.get('/api/allPost');
      if (res.data.status === 'ok') {
        setLoading(false);
        setData(res.data.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, [data]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Container bgColor={'whiteAlpha.100'} maxW={'full'} overflow={'scroll'}>
        {loading ? (
          <Container
            h={'100vh'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <div className="loader"></div>
          </Container>
        ) : (
          ''
        )}
        <Container maxW={'90%'} bg={'whiteAlpha.100'} h={'100vh'} py={'4'}>
          <Grid
            templateColumns={['repeat(1, 2fr)', 'repeat(3, 1fr)']}
            gap={4}
            paddingBottom={'4'}
          >
            {data &&
              data.map(({ image, name, _id }) => (
                <GridItem key={_id}>
                  <Box position="relative">
                    <Img src={image.url} alt="User shared image" />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="rgba(0,0,0,0.5)"
                      opacity={0}
                      transition="opacity 0.2s ease-in-out"
                      _hover={{ opacity: 1 }}
                    >
                      <Text
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        color="white"
                        fontWeight="bold"
                        fontSize={['9', 'lg']}
                        zIndex={1}
                      >
                        {`Shared by ${name}`}
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default CommunityPost;
