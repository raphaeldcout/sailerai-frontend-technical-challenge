import { PropsWithChildren } from 'react';

import { ColorsType } from '@/styles/theme';

export interface OwnProps extends PropsWithChildren {
    variant?: 'xsmall' | 'small' | 'medium' | 'large' | 'ultra' | 'mega';
    weight?: 'light' | 'regular' | 'medium' | 'bold';
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'span';
    color?: ColorsType;
    margin?: string | number;
    padding?: string | number;
    textOverflow?: boolean;
};

export type Props = OwnProps;