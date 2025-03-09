import React from 'react';
import { Image, Heading, Text, Stack } from '@chakra-ui/react';
import { eli } from '../assets/images';

interface TitleProps {
  alignItems: string;
  textAlign: string;
}

const Title: React.FC<TitleProps> = ({ alignItems, textAlign }) => {
  return (
    <Stack alignItems={alignItems}>
      <Image
        src={eli}
        alt="Eli"
        backgroundColor="whiteAlpha.500"
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
      />
      <Heading
        as="h1"
        size="4xl"
        textTransform="uppercase"
        textAlign={textAlign}
      >
        Software Engineer
      </Heading>
      <Text textAlign="right">Problem-solver | Life-long learner</Text>
    </Stack>
  );
};

export default Title;
