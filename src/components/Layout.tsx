import React from 'react';
import { Flex, Stack, StackSeparator } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { layout } = useResponsiveLayout();

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
        {children}
      </Stack>
      {layout.showFooter && <Footer />}
    </Flex>
  );
};

export default Layout;
