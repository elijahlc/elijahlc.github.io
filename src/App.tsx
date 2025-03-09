import React, { useRef, useMemo } from 'react';
import About from './sections/About';
import Achievements from './sections/Achievements';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  useBreakpointValue,
  Flex,
  Stack,
  StackSeparator,
} from '@chakra-ui/react';

const App: React.FC = () => {
  const breakpoint =
    useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' }) ?? 'sm';

  const layout = useMemo(
    () => ({
      flexDirection: breakpoint === 'sm' ? 'column' : 'row',
      showHeader: breakpoint === 'sm',
      hardcodedHeight: breakpoint !== 'sm' ? '100vh' : undefined,
      overflow: breakpoint === 'sm' ? undefined : 'auto',
      showFooter: breakpoint === 'sm',
      sidebar: {
        display: breakpoint === 'sm' ? 'none' : 'block',
        width:
          breakpoint === 'lg' ? '25%' : breakpoint === 'md' ? '33%' : '100%',
      },
    }),
    [breakpoint]
  );

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
      height={layout.hardcodedHeight}
      background="bg.subtle"
      color="gray.700"
      direction={layout.flexDirection}
    >
      <Sidebar display={layout.sidebar.display} width={layout.sidebar.width} />
      {layout.showHeader && <Header />}

      <Stack
        overflowY={layout.overflow}
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
      {layout.showFooter && <Footer />}
    </Flex>
  );
};

export default App;
