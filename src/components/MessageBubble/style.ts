import styled, { keyframes } from 'styled-components';

import { BubbleStyledProps } from './types';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BubbleContainer = styled.div<BubbleStyledProps>`
    width: 100%;
    display: flex;
    justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
    margin: 10px 0;
`;

export const Bubble = styled.div<BubbleStyledProps>`
    background-color: ${({ isUser, theme }) => (isUser ? theme.colors.greenLowLight : theme.colors.neutralLowMedium)};
    padding: 10px 15px;
    border-radius: 15px;
    max-width: 70%;
    position: relative;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    animation: ${fadeUp} 0.5s ease-out;

    &::after {
        content: '';
        position: absolute;
        ${({ isUser, theme }) =>
            isUser
                ? `
                right: -8px;
                border-left: 10px solid ${theme.colors.greenLowLight};
            `
                : `
                left: -8px;
                border-right: 10px solid ${theme.colors.neutralLowMedium};
            `}
        top: 10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }
`;

export const MessageText = styled.div`
    word-wrap: break-word;
`;

export const MessageDate = styled.div`
    margin-top: ${({ theme }) => theme.spacings.md};
    text-align: right;
`;