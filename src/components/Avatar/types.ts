import { ImgHTMLAttributes } from 'react';

export interface OwnProps extends ImgHTMLAttributes<HTMLImageElement> {
    clickable?: boolean;
    src: string;
};

export interface RootStyledProps {
    clickable: OwnProps['clickable'];
}

export type Props = OwnProps;