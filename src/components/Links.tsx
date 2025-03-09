import React from 'react';
import { Box, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Links: React.FC = () => {
  return (
    <Box justifyContent="flex-end" display="flex" gap={2} textAlign="right">
      <Icon as={Link} href="https://github.com/elijahlc" fontSize="2.5rem">
        <FaGithub />
      </Icon>
      <Icon
        as={Link}
        href="https://www.linkedin.com/in/elijahcohen/"
        fontSize="2.5rem"
      >
        <FaLinkedin />
      </Icon>
    </Box>
  );
};

export default Links;
