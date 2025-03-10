import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

interface SectionHeadingProps extends Omit<HeadingProps, 'as'> {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  ...props
}) => {
  const { layout } = useResponsiveLayout();

  return (
    <Heading
      as="h2"
      // size={layout.headingSize as HeadingProps['size']}
      size="5xl"
      textTransform="uppercase"
      color="yellow.600"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default SectionHeading;
