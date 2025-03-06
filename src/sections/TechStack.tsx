import React from 'react';
import { Box, Stack, Heading, Text, List, Flex, Icon } from '@chakra-ui/react';
import icons from '../assets/icons';

const TechStack: React.FC = () => {
  return (
    <Stack as="section" paddingX={6} gap={6} fontSize="lg">
      <Heading as="h2" size="5xl" textTransform="uppercase" color="yellow.600">
        Tech Stack
      </Heading>

      <Box>
        <Text mb={2}>On a day-to-day basis I work with:</Text>

        <Flex justifyContent="space-evenly">
          {icons.map((icon, index) => (
            <Icon key={`icon-${index}`} as={icon} />
          ))}
        </Flex>
      </Box>

      <List.Root paddingStart={8} gap={2}>
        <List.Item>JavaScript</List.Item>
        <List.Item>TypeScript</List.Item>
        <List.Item>Python</List.Item>
        <List.Item>HTML</List.Item>
        <List.Item>CSS</List.Item>
      </List.Root>
    </Stack>
  );
};

export default TechStack;
