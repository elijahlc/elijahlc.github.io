import React from 'react';
import { Box, Stack, Heading, Text, Mark, Button } from '@chakra-ui/react';

interface AboutProps {
  handleClick: () => void;
}

const About: React.FC<AboutProps> = ({ handleClick }) => {
  return (
    <Stack as="section" paddingX={6} gap={6} fontSize="lg">
      <Box>
        <Heading
          as="h2"
          size="5xl"
          textTransform="uppercase"
          color="yellow.600"
        >
          Hi, I'm Eli.
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color="blue.700">
          Former ad tech customer success & client services leader turned
          software engineer.
        </Text>
      </Box>

      <Text>
        What started in 2019 as a knack for debugging basic bugs in my clients'
        Facebook pixels grew into a deep excitement for creating products that
        solve problems for others. As an engineer, I have harnessed my 5 years
        of customer-facing leadership experience to collaborate
        cross-functionally to deliver intuitive solutions to customer problems
        and built tools that simplify & automate repetitive tasks and processes.
        I thrive on building products that just{' '}
        <Mark variant="text" color="cyan.600">
          work
        </Mark>{' '}
        for people!
      </Text>

      <Button
        alignSelf="start"
        colorPalette="cyan"
        size="xl"
        onClick={handleClick}
      >
        Get in touch
      </Button>
    </Stack>
  );
};

export default About;
