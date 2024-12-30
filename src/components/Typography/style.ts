import styled, { css, DefaultTheme } from 'styled-components';

import theme from '@/styles/theme';

import { Props } from './types';

const getTypographyStyles = (fontSize: string, lineHeight = theme.typography.lineHeight.xs) =>
    css({ fontSize, lineHeight });

const variantModifier = {
    xsmall: ({ typography }: DefaultTheme) =>
        getTypographyStyles(typography.fontSize.xs, typography.lineHeight.xs),
    small: ({ typography }: DefaultTheme) =>
        getTypographyStyles(typography.fontSize.sm, typography.lineHeight.sm),
    medium: ({ typography }: DefaultTheme) =>
        getTypographyStyles(typography.fontSize.md, typography.lineHeight.sm),
    large: ({ typography }: DefaultTheme) =>
        getTypographyStyles(typography.fontSize.lg, typography.lineHeight.md),
    ultra: ({ typography }: DefaultTheme) =>
        getTypographyStyles(typography.fontSize.xl, typography.lineHeight.md),
    mega: ({ typography }: DefaultTheme) =>
        getTypographyStyles(typography.fontSize.xxl, typography.lineHeight.md)
};

const weightModifier = {
    light: ({ typography }: DefaultTheme) =>
        css({ fontWeight: typography.fontWeight.light }),
    regular: ({ typography }: DefaultTheme) =>
        css({ fontWeight: typography.fontWeight.normal }),
    medium: ({ typography }: DefaultTheme) =>
        css({ fontWeight: typography.fontWeight.medium }),
    bold: ({ typography }: DefaultTheme) =>
        css({ fontWeight: typography.fontWeight.bold }),
};

export const Root = styled.p<Props>`
    ${({ theme, variant }) => variantModifier[variant!](theme)}
    ${({ theme, weight }) => weightModifier[weight!](theme)}
    color: ${({ color, theme }) => theme.colors[color!]};
    ${({ margin }) => margin && css({ margin })};
    ${({ padding }) => padding && css({ padding })};
    ${({ textOverflow }) =>
        textOverflow &&
        css({ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' })};
`;