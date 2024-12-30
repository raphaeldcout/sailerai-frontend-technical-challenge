import styled from 'styled-components';

export const NAVBAR_HEIGHT = 60;

export const Root = styled.nav`
    width: 100%;
    height: ${NAVBAR_HEIGHT}px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    padding: 0 ${({ theme }) => theme.spacings.md};
`;