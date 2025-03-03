import React from 'react';
import About from './sections/About';
import Sidebar from './components/Sidebar';
import { useBreakpointValue, Flex, Stack } from '@chakra-ui/react';

const App: React.FC = () => {
  const sidebar = useBreakpointValue({
    base: { display: 'none', width: '100%' },
    md: { display: 'block', width: '33%' },
    lg: { display: 'block', width: '25%' },
  }) ?? { display: 'none', width: '100%' };
  return (
    <Flex as="main" width="100%" height="100vh">
      <Sidebar display={sidebar.display} width={sidebar.width} />
      <Stack paddingX={6} paddingY={12}>
        <About />
      </Stack>
    </Flex>
  );
};

export default App;
