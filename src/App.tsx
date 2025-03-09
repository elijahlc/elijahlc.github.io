import React, { useRef } from 'react';
import About from './sections/About';
import Achievements from './sections/Achievements';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Sidebar from './components/Sidebar';
import {
  useBreakpointValue,
  Flex,
  Stack,
  StackSeparator,
} from '@chakra-ui/react';

const App: React.FC = () => {
  const sidebar = useBreakpointValue({
    base: { display: 'none', width: '100%' },
    md: { display: 'block', width: '33%' },
    lg: { display: 'block', width: '25%' },
  }) ?? { display: 'none', width: '100%' };

  const contactRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex
      as="main"
      width="100%"
      height="100vh"
      background="bg.subtle"
      color="gray.700"
    >
      <Sidebar display={sidebar.display} width={sidebar.width} />
      <Stack
        overflowY="auto"
        paddingX={6}
        paddingY={12}
        gap={12}
        separator={<StackSeparator />}
      >
        <About handleClick={scrollToContact} />
        <Achievements />
        <TechStack />
        <Contact sectionRef={contactRef} />
      </Stack>
    </Flex>
  );
};

export default App;
