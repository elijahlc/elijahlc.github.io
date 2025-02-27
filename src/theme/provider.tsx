import { ReactNode } from 'react';
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

import '@fontsource/raleway';

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Raleway, sans-serif' },
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export const Provider = (props: { children: ReactNode }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class">{props.children}</ThemeProvider>
    </ChakraProvider>
  );
};
