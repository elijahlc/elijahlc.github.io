import React from 'react';
import { Box } from '@chakra-ui/react';
import Links from './Links';

const Footer: React.FC = () => {
  return (
    <Box
      paddingX={4}
      paddingY={8}
      bgGradient="linear-gradient(to bottom, #60a9a7 0%, #40768c 100%)"
      color="white"
    >
      <Links justifyContent="center" />
    </Box>
  );
};

export default Footer;
