import styled from 'styled-components';

export const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: ${({ theme }) => theme.spacings.lg};
    background-color: ${({ theme }) => theme.colors.primary};
    gap: ${({ theme }) => theme.spacings.sm};
    border-bottom-right-radius: ${({ theme }) => theme.borders.radius.md};
    border-bottom-left-radius: ${({ theme }) => theme.borders.radius.md};
`;