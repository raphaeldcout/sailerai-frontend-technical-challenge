import styled, { css } from 'styled-components';

import { Props } from './types';

export const Root = styled.button<Props>`
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: ${({ theme }) => theme.spacings.sm};
    border-radius: ${({ theme }) => theme.spacings.xs};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    outline: none;

    &:hover {
        background-color: ${({ backgrounColor, theme }) => theme.colors[backgrounColor!]};
    }

    ${({ disabled }) => disabled && css`
        cursor: not-allowed;
    `}
`;