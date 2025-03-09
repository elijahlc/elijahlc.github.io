import React from 'react';
import { Stack, StackProps } from '@chakra-ui/react';

interface SectionProps extends StackProps {
  children: React.ReactNode;
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const Section: React.FC<SectionProps> = ({
  children,
  sectionRef,
  ...props
}) => {
  return (
    <Stack
      ref={sectionRef}
      as="section"
      paddingX={6}
      gap={6}
      fontSize="lg"
      {...props}
    >
      {children}
    </Stack>
  );
};

export default Section;
