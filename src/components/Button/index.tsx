import { FC } from 'react';

import { Typography } from '@/components/Typography';
import theme from '@/styles/theme';

import { ButtonStyled, IconWrapper, LoaderIcon } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({
  animated = false,
  color = 'successLight',
  disabled,
  iconLeft,
  iconRight,
  label,
  loading,
  onClick,
  responsiveMode = false,
}) => (
  <ButtonStyled
    data-testid="root-button"
    color={color}
    disabled={disabled}
    animated={animated}
    responsiveMode={responsiveMode}
    onClick={onClick}
  >
    {iconLeft && (
      <IconWrapper data-testid="root-button-icon-left">{iconLeft}</IconWrapper>
    )}
    {!responsiveMode && (
      <Typography data-testid="root-button-label" weight="medium">
        {label}
      </Typography>
    )}
    {iconRight && !loading && (
      <IconWrapper data-testid="root-button-icon-right">
        {iconRight}
      </IconWrapper>
    )}
    {loading && (
      <IconWrapper data-testid="root-button-loading">
        <LoaderIcon size={20} color={theme.colors.surface} />
      </IconWrapper>
    )}
  </ButtonStyled>
);
