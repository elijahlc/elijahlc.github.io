import React from 'react';
import { Flex, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface LinksProps {
  justifyContent: string;
}

const Links: React.FC<LinksProps> = ({ justifyContent }) => {
  return (
    <Flex justifyContent={justifyContent} display="flex" gap={2}>
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
    </Flex>
  );
};

export default Links;
