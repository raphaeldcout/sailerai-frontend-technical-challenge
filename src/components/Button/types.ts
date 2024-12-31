import { ButtonHTMLAttributes } from 'react';

export interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label: string;
  onClick?: () => void;
  responsiveMode?: boolean;
  animated?: boolean;
  loading?: boolean;
};

export interface ButtonStyledProps {
  responsiveMode: OwnProps['responsiveMode'];
  animated: OwnProps['animated'];
};

export type Props = OwnProps;