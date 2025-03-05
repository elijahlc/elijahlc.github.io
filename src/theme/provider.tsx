import { ReactNode } from 'react';
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

import '@fontsource/raleway/800.css';

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Raleway, sans-serif' },
        body: {
          value:
            '--apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
      },
      colors: {
        red: {
          50: { value: '#f5c5b9' },
          100: { value: '#f3b7a8' },
          200: { value: '#f1a997' },
          300: { value: '#ee9a85' },
          400: { value: '#ec8c74' },
          500: { value: '#e97d62' },
          600: { value: '#e76f51' },
          700: { value: '#b95941' },
          800: { value: '#a24e39' },
          900: { value: '#8b4331' },
          950: { value: '#743829' },
        },
        pink: {
          50: { value: '#f0cfd6' },
          100: { value: '#ecc3cc' },
          200: { value: '#e8b6c2' },
          300: { value: '#e4aab8' },
          400: { value: '#e19ead' },
          500: { value: '#dd92a3' },
          600: { value: '#d98699' },
          700: { value: '#ae6b7a' },
          800: { value: '#985e6b' },
          900: { value: '#82505c' },
          950: { value: '#6d434d' },
        },
        orange: {
          50: { value: '#fbdac0' },
          100: { value: '#fad1b0' },
          200: { value: '#f8c7a0' },
          300: { value: '#f7be90' },
          400: { value: '#f6b581' },
          500: { value: '#f5ab71' },
          600: { value: '#f4a261' },
          700: { value: '#c3824e' },
          800: { value: '#ab7144' },
          900: { value: '#92613a' },
          950: { value: '#7a5131' },
        },
        cyan: {
          50: { value: '#bfdddc' },
          100: { value: '#b0d4d3' },
          200: { value: '#a0cbca' },
          300: { value: '#90c3c1' },
          400: { value: '#80bab9' },
          500: { value: '#70b2b0' },
          600: { value: '#60a9a7' },
          700: { value: '#4d8786' },
          800: { value: '#437675' },
          900: { value: '#3a6564' },
          950: { value: '#305554' },
        },
        blue: {
          50: { value: '#b3c8d1' },
          100: { value: '#a0bbc6' },
          200: { value: '#8cadba' },
          300: { value: '#799faf' },
          400: { value: '#6691a3' },
          500: { value: '#538498' },
          600: { value: '#40768c' },
          700: { value: '#335e70' },
          800: { value: '#2d5362' },
          900: { value: '#264754' },
          950: { value: '#203b46' },
        },
        teal: {
          50: { value: '#d0eae2' },
          100: { value: '#b9dfd4' },
          200: { value: '#a1d4c5' },
          300: { value: '#8acab7' },
          400: { value: '#72bfa8' },
          500: { value: '#5bb59a' },
          600: { value: '#43AA8B' },
          700: { value: '#327f68' },
          800: { value: '#2a6a57' },
          900: { value: '#225546' },
          950: { value: '#194034' },
        },
        green: {
          50: { value: '#d3e5c5' },
          100: { value: '#c8dfb6' },
          200: { value: '#bcd8a7' },
          300: { value: '#b1d299' },
          400: { value: '#a6cb8a' },
          500: { value: '#9bc57c' },
          600: { value: '#90be6d' },
          700: { value: '#739857' },
          800: { value: '#65854c' },
          900: { value: '#567241' },
          950: { value: '#485f37' },
        },
        yellow: {
          50: { value: '#f6e7c3' },
          100: { value: '#f4e2b5' },
          200: { value: '#f2dca6' },
          300: { value: '#f0d697' },
          400: { value: '#edd088' },
          500: { value: '#ebca79' },
          600: { value: '#e9c46a' },
          700: { value: '#ba9d55' },
          800: { value: '#a3894a' },
          900: { value: '#8c7640' },
          950: { value: '#756235' },
        },
        purple: {
          50: { value: '#b7b8d4' },
          100: { value: '#a6a6ca' },
          200: { value: '#9494bf' },
          300: { value: '#8282b4' },
          400: { value: '#7071a9' },
          500: { value: '#5e5f9f' },
          600: { value: '#4c4d94' },
          700: { value: '#3d3e76' },
          800: { value: '#353668' },
          900: { value: '#2e2e59' },
          950: { value: '#26274a' },
        },
      },
    },
    semanticTokens: {
      colors: {
        yellow: {
          solid: { value: '{colors.yellow.600}' },
          focusRing: { value: '{colors.yellow.600}' },
        },
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
