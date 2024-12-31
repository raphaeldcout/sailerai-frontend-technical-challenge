import { ButtonHTMLAttributes } from 'react';

import { ColorsType } from '@/styles/theme';

export interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label: string;
  onClick?: () => void;
  responsiveMode?: boolean;
  animated?: boolean;
  loading?: boolean;
  color?: ColorsType;
};

export interface ButtonStyledProps {
  responsiveMode: OwnProps['responsiveMode'];
  animated: OwnProps['animated'];
  color: OwnProps['color'];
};

export type Props = OwnProps;