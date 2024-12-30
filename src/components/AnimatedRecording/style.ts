import styled, { keyframes } from 'styled-components';

export const waveAnimation = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.5);
  }
`;

export const RecordingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 25px;
`;

export const Wave = styled.div`
  width: 8px;
  height: 100%;
  background-color:${({ theme }) => theme.colors.surface};
  margin: 0 2px;
  animation: ${waveAnimation} 0.6s infinite ease-in-out;
  
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
`;