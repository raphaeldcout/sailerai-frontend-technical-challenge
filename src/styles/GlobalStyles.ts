'use client';

import { createGlobalStyle, css } from 'styled-components';

import theme from './theme';

const styles = css`
  // Evolution: possibility of changing themes (dark or light).
  
  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: ${theme.darkMode.foregroundRgb};
      --background-start-rgb: ${theme.darkMode.backgroundStartRgb};
      --background-end-rgb: ${theme.darkMode.backgroundEndRgb};
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;