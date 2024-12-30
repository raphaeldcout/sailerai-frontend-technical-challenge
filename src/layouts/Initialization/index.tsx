'use client';

import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import theme from '@/styles/theme';

import { Root } from './style';

const Initialization: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Root>{children}</Root>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Initialization;
