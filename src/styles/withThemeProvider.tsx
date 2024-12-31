'use client';

import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/styles/theme';

export const ThemeProviderSailer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
