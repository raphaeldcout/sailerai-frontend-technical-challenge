import styled, { css, keyframes } from 'styled-components';

import { ButtonStyledProps } from './types';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(46, 178, 110, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(46, 178, 110, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(46, 178, 110, 0.2);
  }
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.successLight};
  border: none;
  border-radius: ${({ theme }) => theme.borders.radius.md};
  outline: none;

  animation: ${pulse} 2s infinite;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color:rgb(46, 178, 110);
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
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;