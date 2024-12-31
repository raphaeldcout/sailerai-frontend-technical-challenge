import styled from 'styled-components';

import { fadeIn } from '@/styles/keyframes';

export const Root = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.lg};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borders.radius.md};
    animation: ${fadeIn} 0.4s ease-in;
    margin: ${({ theme }) => theme.spacings.lg};
    padding: ${({ theme }) => theme.spacings.lg};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.small}px) {
        display: none;
    }
`;