import { PropsWithChildren } from 'react';

import { ColorsType } from '@/styles/theme';

export const TypographyVariant = ['xsmall', 'small', 'medium', 'large', 'ultra', 'mega'] as const;

export type TypographyVariants = (typeof TypographyVariant)[number];

export const TypographyWeight = ['light', 'regular', 'medium', 'bold'] as const;

export type TypographyWeights = (typeof TypographyWeight)[number];

export const TypographyAs = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'span'] as const;

export type TypographyAss = (typeof TypographyAs)[number];

export interface OwnProps extends PropsWithChildren {
    variant?: TypographyVariants;
    weight?: TypographyWeights;
    as?: TypographyAss;
    color?: ColorsType;
    margin?: string | number;
    padding?: string | number;
    textOverflow?: boolean;
};

export type Props = OwnProps;