import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const typingDots = keyframes`
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

export const waveAnimation = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.5);
  }
`;

export const pulse = keyframes`
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

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;