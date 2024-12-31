import { FC, ReactElement, ReactNode } from 'react';

import { ThemeProviderSailer } from '@/styles/withThemeProvider';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProviderSailer>{children}</ThemeProviderSailer>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

