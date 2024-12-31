import styled, { css, DefaultTheme } from 'styled-components';

import { BadgeColor, OwnProps } from './type';

const getBackgroundColor = (theme: DefaultTheme, color: BadgeColor) => {
    switch (color) {
        case 'information':
            return theme.colors.secondary;
        case 'positive':
            return theme.colors.success;
        case 'negative':
            return theme.colors.error;
        case 'warning':
            return theme.colors.warning;
        case 'neutral':
            return theme.colors.neutralLowDark;
        default:
            return '';
    }
};

export const Root = styled.span<OwnProps>`
    display: inline-block;
    align-items: center;
    justify-content: center;
    background: ${({ color, theme }) => getBackgroundColor(theme, color)};

    ${({ variant }) => {
        if (variant === 'small') {
            return css`
                border-radius: ${({ theme }) => theme.borders.radius.sm};
                height: ${({ theme }) => theme.borders.radius.sm};
                width: ${({ theme }) => theme.borders.radius.sm};
                min-height: ${({ theme }) => theme.borders.radius.sm};
                min-width: ${({ theme }) => theme.borders.radius.sm};
            `;
        }

        if (variant === 'medium') {
            return css`
                border-radius: ${({ theme }) => theme.borders.radius.md};
                height: ${({ theme }) => theme.borders.radius.md};
                width: ${({ theme }) => theme.borders.radius.md};
                min-height: ${({ theme }) => theme.borders.radius.md};
                min-width: ${({ theme }) => theme.borders.radius.md};
            `;
        }

        if (variant === 'large') {
            return css`
                border-radius: ${({ theme }) => theme.borders.radius.lg};
                height: ${({ theme }) => theme.borders.radius.lg};
                width: ${({ theme }) => theme.borders.radius.lg};
                min-height: ${({ theme }) => theme.borders.radius.lg};
                min-width: ${({ theme }) => theme.borders.radius.lg};
            `;
        }
    }}
`;