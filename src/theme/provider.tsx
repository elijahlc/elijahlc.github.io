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
      },
      colors: {
        red: {
          50: { value: '#fdd0d0' },
          100: { value: '#fdb8b9' },
          200: { value: '#fca0a2' },
          300: { value: '#fb888a' },
          400: { value: '#fb7173' },
          500: { value: '#fa595b' },
          600: { value: '#f94144' },
          700: { value: '#bb3133' },
          800: { value: '#9c292b' },
          900: { value: '#7c2122' },
          950: { value: '#5d181a' },
        },
        pink: {
          50: { value: '#f6e1e6' },
          100: { value: '#f1d2d9' },
          200: { value: '#ecc3cc' },
          300: { value: '#e7b3bf' },
          400: { value: '#e3a4b3' },
          500: { value: '#de95a6' },
          600: { value: '#d98699' },
          700: { value: '#a36573' },
          800: { value: '#885460' },
          900: { value: '#6d434d' },
          950: { value: '#513239' },
        },
        orange: {
          50: { value: '#fcdcca' },
          100: { value: '#facab0' },
          200: { value: '#f9b995' },
          300: { value: '#f7a77b' },
          400: { value: '#f69561' },
          500: { value: '#f48446' },
          600: { value: '#f3722c' },
          700: { value: '#b65621' },
          800: { value: '#98471b' },
          900: { value: '#793916' },
          950: { value: '#5b2b10' },
        },
        cyan: {
          50: { value: '#d3e3e3' },
          100: { value: '#bcd5d5' },
          200: { value: '#a6c8c7' },
          300: { value: '#90bab8' },
          400: { value: '#7aacaa' },
          500: { value: '#639e9c' },
          600: { value: '#4D908E' },
          700: { value: '#3a6c6b' },
          800: { value: '#305a59' },
          900: { value: '#274847' },
          950: { value: '#1d3635' },
        },
        blue: {
          50: { value: '#c9dfe8' },
          100: { value: '#aecedc' },
          200: { value: '#93bed0' },
          300: { value: '#78aec4' },
          400: { value: '#5d9eb9' },
          500: { value: '#428dad' },
          600: { value: '#277DA1' },
          700: { value: '#1d5e79' },
          800: { value: '#184e65' },
          900: { value: '#143e51' },
          950: { value: '#0f2f3c' },
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
          50: { value: '#e3efda' },
          100: { value: '#d5e7c8' },
          200: { value: '#c8dfb6' },
          300: { value: '#bad6a4' },
          400: { value: '#acce92' },
          500: { value: '#9ec67f' },
          600: { value: '#90be6d' },
          700: { value: '#6c8f52' },
          800: { value: '#5a7744' },
          900: { value: '#485f37' },
          950: { value: '#364729' },
        },
        yellow: {
          50: { value: '#fdf1d3' },
          100: { value: '#fdeabd' },
          200: { value: '#fce3a7' },
          300: { value: '#fbdc91' },
          400: { value: '#fbd57b' },
          500: { value: '#face65' },
          600: { value: '#f9c74f' },
          700: { value: '#daae45' },
          800: { value: '#bb953b' },
          900: { value: '#9c7c31' },
          950: { value: '#7c6428' },
        },
        purple: {
          50: { value: '#d2d3e4' },
          100: { value: '#bcbcd7' },
          200: { value: '#a6a6ca' },
          300: { value: '#8f90bc' },
          400: { value: '#797aaf' },
          500: { value: '#6263a1' },
          600: { value: '#4c4d94' },
          700: { value: '#393a6f' },
          800: { value: '#30305d' },
          900: { value: '#26274a' },
          950: { value: '#1c1d38' },
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
