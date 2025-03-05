import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  Mark,
  List,
  Blockquote,
} from '@chakra-ui/react';
import { recentAchievements } from '@/data/achievements';

const About: React.FC = () => {
  const achievementsToHighlight = recentAchievements.filter(
    (achievement) => achievement.category === 'accomplishment'
  );
  const recommendations = recentAchievements.filter(
    (achievement) => achievement.category === 'recommendation'
  );

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

      <Box>
        <Text mb={2}>In my current role, I:</Text>

        <List.Root paddingStart={8} gap={2}>
          {achievementsToHighlight.map((achievement, index) => (
            <List.Item key={`achievement-${index}`}>
              {achievement.description}
            </List.Item>
          ))}
        </List.Root>
      </Box>

      <Box>
        <Text mb={2}>Here's what others have to say about me:</Text>

        {recommendations.map((recommendation, index) => (
          <Blockquote.Root key={`recommendation-${index}`} colorPalette="cyan">
            <Blockquote.Content cite={recommendation.attribution}>
              {recommendation.description}
            </Blockquote.Content>

            <Blockquote.Caption>
              — <cite>{recommendation.attribution}</cite>
            </Blockquote.Caption>
          </Blockquote.Root>
        ))}
      </Box>
    </Stack>
  );
};

export default About;
