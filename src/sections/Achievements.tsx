import React from 'react';
import { Box, Stack, Heading, Text, List, Blockquote } from '@chakra-ui/react';
import { recentAchievements } from '@/data/achievements';

const Achievements: React.FC = () => {
  const achievementsToHighlight = recentAchievements.filter(
    (achievement) => achievement.category === 'accomplishment'
  );
  const recommendations = recentAchievements.filter(
    (achievement) => achievement.category === 'recommendation'
  );

  return (
    <Stack as="section" paddingX={6} gap={6} fontSize="lg">
      <Heading as="h2" size="5xl" textTransform="uppercase" color="yellow.600">
        Recent Achievements
      </Heading>

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

export default Achievements;
