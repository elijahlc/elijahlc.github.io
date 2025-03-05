import React from 'react';
import { Box, Stack, Image, Heading, Text } from '@chakra-ui/react';
import { eli } from '../assets/images';

export interface SidebarProps {
  display: string;
  width: string;
}

const Sidebar: React.FC<SidebarProps> = ({ display, width }) => {
  return (
    <Box
      width={width}
      flexShrink={0}
      height="100vh"
      display={display}
      bgGradient="linear-gradient(to bottom, #e76f51 0%, #f5ab71 20%, #e9c46a 50%, #60a9a7 80%, #40768c 100%)"
      color="white"
      p={4}
    >
      <Stack alignItems="flex-end" height="100%" justifyContent="center">
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
        <Text textAlign="center">Problem-solver | Life-long learner</Text>
      </Stack>
    </Box>
  );
};

export default Sidebar;
