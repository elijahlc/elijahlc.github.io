import React from 'react';
import About from './sections/About';
import Achievements from './sections/Achievements';
import TechStack from './sections/TechStack';
import ContactForm from './components/ContactForm';
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
  return (
    <Flex
      as="main"
      width="100%"
      minHeight="100vh"
      background="bg.subtle"
      color="gray.700"
    >
      <Sidebar display={sidebar.display} width={sidebar.width} />
      <Stack paddingX={6} paddingY={12} gap={12} separator={<StackSeparator />}>
        <About />
        <Achievements />
        <TechStack />
        <ContactForm />
      </Stack>
    </Flex>
  );
};

export default App;
