import styled, { css } from 'styled-components';

import { RootStyledProps } from './types';

export const Root = styled.div<RootStyledProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.md};

    ${({ isCollapsed }) => {
        if (isCollapsed) return css`
            flex-direction: column;
            gap: ${({ theme }) => theme.spacings.xs};
        `;
    }}
`;
