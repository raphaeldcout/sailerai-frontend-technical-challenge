export interface OwnProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  responsiveMode?: boolean;
};

export interface ButtonStyledProps {
  responsiveMode: OwnProps['responsiveMode'];
};

export type Props = OwnProps;