import styled from 'styled-components';

export const Root = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;

    > nav, > section {
        @media screen and (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            display: none;
        }
    }
`;