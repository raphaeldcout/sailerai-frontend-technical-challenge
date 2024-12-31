import styled from 'styled-components';

import { typingDots } from '@/styles/keyframes';

export const AnimatedDotsStyled = styled.span`
  &::after {
    content: '';
    display: inline-block;
    animation: ${typingDots} 1.5s steps(1, end) infinite;
  }
`;