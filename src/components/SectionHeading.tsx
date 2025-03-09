import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

interface SectionHeadingProps extends Omit<HeadingProps, 'as' | 'size'> {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  color = 'yellow.600',
  ...props
}) => {
  return (
    <Heading
      as="h2"
      size="5xl"
      textTransform="uppercase"
      color={color}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
