import { darken } from 'polished';
import { FiRotateCw } from 'react-icons/fi';
import styled, { css } from 'styled-components';

import { pulse, rotate } from '@/styles/keyframes';

import { ButtonStyledProps } from './types';

export const ButtonStyled = styled.button<ButtonStyledProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) => theme.colors[color!]};
  border: none;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  outline: none;

  ${({ animated }) => animated && css`animation: ${pulse} 2s infinite;`}
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ color, theme }) => darken(0.1, theme.colors[color!].toString())};
  }

  &:active {
    transform: scale(0.98);
  }

  ${(({ responsiveMode }) => {
    if (responsiveMode) {
      return css`
        padding: 8px 10px;
      `;
    }

    return css`
      gap: ${({ theme }) => theme.spacings.xs};
      padding: 10px 20px;
    `;
  })}

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderIcon = styled(FiRotateCw)`
  animation: ${rotate} 1.5s linear infinite;
`;