import React from 'react';
import { Image, Heading, Text, Stack } from '@chakra-ui/react';
import { eli } from '../assets/images';

const Title: React.FC = () => {
  return (
    <Stack alignItems="flex-end" justifyContent="flex-start">
      <Image
        src={eli}
        alt="Eli"
        backgroundColor="whiteAlpha.500"
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
      />
      <Heading as="h1" size="4xl" textTransform="uppercase" textAlign="right">
        Software Engineer
      </Heading>
      <Text textAlign="right">Problem-solver | Life-long learner</Text>
    </Stack>
  );
};

export default Title;
