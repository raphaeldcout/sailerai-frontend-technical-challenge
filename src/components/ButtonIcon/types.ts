import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface OwnProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {};

export type Props = OwnProps;