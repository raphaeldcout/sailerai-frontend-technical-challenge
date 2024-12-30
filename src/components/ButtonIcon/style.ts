import styled, { css } from 'styled-components';

export const Root = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
    padding: ${({ theme }) => theme.spacings.sm};
    border-radius: ${({ theme }) => theme.spacings.xs};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    outline: none;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryLight};
        background-color: ${({ theme }) => theme.colors.primaryLight};
    }

    ${({ disabled }) => disabled && css`
        cursor: not-allowed;
    `}
`;