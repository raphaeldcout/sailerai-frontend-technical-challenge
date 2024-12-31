import styled from 'styled-components';

export const Root = styled.article`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacings.lg};
    background-color: ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacings.sm};
`;
