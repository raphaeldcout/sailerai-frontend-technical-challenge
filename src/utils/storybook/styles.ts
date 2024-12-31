import styled, { css } from 'styled-components';

import { FlexboxProps } from './types';

export const Flexbox = styled.div<FlexboxProps>`
    display: flex;
    ${({ flexDirection }) => flexDirection && css({ flexDirection })};
    ${({ flexWrap }) => flexWrap && css({ flexWrap })};
    ${({ justifyContent }) => justifyContent && css({ justifyContent })};
    ${({ alignItems }) => alignItems && css({ alignItems })};
    ${({ alignContent }) => alignContent && css({ alignContent })};
    ${({ margin }) => margin && css({ margin })};
    ${({ padding }) => padding && css({ padding })};
    ${({ flex }) => flex && css({ flex })};
    ${({ gap }) => gap && css({ gap })};
    ${({ maxWidth }) => maxWidth && css({ maxWidth })};
  `;