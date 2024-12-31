import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { ColorsType } from '@/styles/theme';

export interface OwnProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    backgrounColor?: ColorsType;
};

export type Props = OwnProps;