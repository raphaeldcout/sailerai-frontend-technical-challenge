import styled, { css } from 'styled-components';

import { waveAnimation } from '@/styles/keyframes';

import { QUANTITY_DEFAULT } from '.';
import { Props } from './types';

export const RecordingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 25px;
`;

export const Wave = styled.div<Props>`
  width: 8px;
  height: 100%;
  background-color: ${({ color, theme }) => theme.colors[color!]};
  margin: 0 2px;
  animation: ${waveAnimation} 0.6s infinite ease-in-out;
  
  ${({ quantity = QUANTITY_DEFAULT }) => css`
    ${Array.from({ length: quantity })
    .map(
      (_, index) => `
        &:nth-child(${index + 1}) {
          animation-delay: ${index * 0.1}s;
        }
      `
    )
    .join('')}
  `}
`;