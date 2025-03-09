import React from 'react';
import { Box, Stack, Heading, Text, List, Wrap, Icon } from '@chakra-ui/react';
import iconClasses from '../assets/icons';
import { skills } from '@/data/achievements';
const TechStack: React.FC = () => {
  const filteredSkills = skills
    .map((category) => {
      return {
        ...category,
        skills: category.skills.filter((skill) => {
          return (
            iconClasses
              .join('')
              .indexOf(skill.name.toLowerCase().replace(/[^\w]/g, '')) === -1
          );
        }),
      };
    })
    .filter((category) => category.skills.length > 0);

  return (
    <Stack as="section" paddingX={6} gap={6} fontSize="lg">
      <Heading as="h2" size="5xl" textTransform="uppercase" color="yellow.600">
        Tech Stack
      </Heading>

      <Box>
        <Text mb={2}>On a day-to-day basis I work with:</Text>

        <Wrap justifyContent="space-evenly">
          {iconClasses.map((icon, index) => (
            <Icon key={`icon-${index}`}>
              <i style={{ fontSize: '2.5rem' }} className={icon} />
            </Icon>
          ))}
        </Wrap>
      </Box>

      <Box>
        <Text mb={2}>I'm also experienced with:</Text>
        <List.Root paddingStart={8} gap={2}>
          {filteredSkills.map((category, index) => (
            <List.Item key={`skills-${index}`}>
              {category.name}:{' '}
              {category.skills.map((skill) => skill.name).join(', ')}
            </List.Item>
          ))}
        </List.Root>
      </Box>
    </Stack>
  );
};

export default TechStack;
