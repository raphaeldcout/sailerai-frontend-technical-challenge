import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import GlobalStyles from './../src/styles/GlobalStyles';
import { ThemeProviderSailer } from './../src/styles/withThemeProvider';

import './assets/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeFromJSXProvider({
    Provider: ThemeProviderSailer,
    GlobalStyles,
  })]
};

export default preview;
