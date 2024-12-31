import styled from 'styled-components';

import { fadeIn } from '@/styles/keyframes';

export const Root = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-radius: ${({ theme }) => theme.borders.radius.md};
    animation: ${fadeIn} 0.4s ease-in;
`;