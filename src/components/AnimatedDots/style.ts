import styled, { keyframes } from 'styled-components';

const typingDots = keyframes`
  0% {
    content: '';
  }
  20% {
    content: '.';
  }
  50% {
    content: '..';
  }
  80% {
    content: '...';
  }
`;

export const AnimatedDotsStyled = styled.span`
  &::after {
    content: '';
    display: inline-block;
    animation: ${typingDots} 1.5s steps(1, end) infinite;
  }
`;