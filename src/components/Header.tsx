import React from 'react';
import { Box } from '@chakra-ui/react';
import Title from './Title';

const Header: React.FC = () => {
  return (
    <Box
      paddingX={4}
      paddingY={8}
      bgGradient="linear-gradient(to bottom, #e76f51 0%, #f5ab71 50%, #e9c46a 100%)"
      color="white"
    >
      <Title alignItems="center" textAlign="center" />
    </Box>
  );
};

export default Header;
