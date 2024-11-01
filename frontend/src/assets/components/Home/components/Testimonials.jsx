import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import publicApi from '../../../../public_api.js'; // Adjust the import path as necessary

export default function WithSpeechBubbles() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicApi.get('/api/umang2/testimonial/top/3') // Fetch the top 3 testimonials
      .then(response => {
        const { testimonials } = response.data;
        setTestimonials(testimonials);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading testimonials...</>;
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <TestimonialContent>
                <TestimonialHeading>
                  {testimonial?.satisfactionRating >= 4 ? 'Highly Satisfied' : 'Satisfied'}
                </TestimonialHeading>
                <TestimonialText>
                  {testimonial?.text}
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={'https://via.placeholder.com/100'} // Placeholder image
                name={`${testimonial?.user?.firstName} ${testimonial?.user?.lastName}`}
                title={'Client'}
              />
            </Testimonial>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

// Helper components
const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
