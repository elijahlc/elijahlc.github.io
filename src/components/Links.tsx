import React from 'react';
import { Flex, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface LinksProps {
  justifyContent: string;
}

const Links: React.FC<LinksProps> = ({ justifyContent }) => {
  return (
    <Flex justifyContent={justifyContent} display="flex" gap={2}>
      <Link
        href="https://github.com/elijahlc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FaGithub} color="white" fontSize="2.5rem" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/elijahcohen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FaLinkedin} color="white" fontSize="2.5rem" />
      </Link>
    </Flex>
  );
};

export default Links;
