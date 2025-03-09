import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Title from './Title';
import Links from './Links';

export interface SidebarProps {
  display: string;
  width: string;
}

const Sidebar: React.FC<SidebarProps> = ({ display, width }) => {
  return (
    <Box
      width={width}
      flexShrink={0}
      minHeight="100vh"
      display={display}
      bgGradient="linear-gradient(to bottom, #e76f51 0%, #f5ab71 20%, #e9c46a 50%, #60a9a7 80%, #40768c 100%)"
      color="white"
      paddingX={4}
      paddingY={8}
    >
      <Flex
        direction="column"
        height="100%"
        justifyContent="space-between"
        paddingY={12}
      >
        <Box marginTop="5vh">
          <Title alignItems="flex-end" textAlign="right" />
        </Box>
        <Box marginBottom="5vh">
          <Links justifyContent="flex-end" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
