import styled from 'styled-components';

export const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacings.sm};
    padding: ${({ theme }) => theme.spacings.lg};
    background-color: ${({ theme }) => theme.colors.primary};

    box-shadow: ${({ theme }) => theme.shadows.md};
    border-top-right-radius: ${({ theme }) => theme.borders.radius.md};
    border-top-left-radius: ${({ theme }) => theme.borders.radius.md};
`;