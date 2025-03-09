import { useBreakpointValue } from '@chakra-ui/react';

export const useResponsiveLayout = () => {
  const breakpoint =
    useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' }) ?? 'sm';

  const isMobile = breakpoint === 'sm';
  const isTablet = breakpoint === 'md';
  const isDesktop = breakpoint === 'lg';

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    layout: {
      flexDirection: isMobile ? 'column' : 'row',
      showHeader: isMobile,
      hardcodedHeight: !isMobile ? '100vh' : undefined,
      overflow: isMobile ? undefined : 'auto',
      showFooter: isMobile,
      sidebar: {
        display: isMobile ? 'none' : 'block',
        width: isDesktop ? '25%' : isTablet ? '33%' : '100%',
      },
    },
  };
};
