import { FC } from 'react';

import { Typography } from '@/components/Typography';
import theme from '@/styles/theme';

import { ButtonStyled, IconWrapper, LoaderIcon } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({
  animated = false,
  disabled,
  iconLeft,
  iconRight,
  label,
  loading,
  onClick,
  responsiveMode = false,
}) => (
  <ButtonStyled
    disabled={disabled}
    animated={animated}
    responsiveMode={responsiveMode}
    onClick={onClick}
  >
    {iconLeft && <IconWrapper>{iconLeft}</IconWrapper>}
    {!responsiveMode && <Typography weight="medium">{label}</Typography>}
    {iconRight && !loading && <IconWrapper>{iconRight}</IconWrapper>}
    {loading && (
      <IconWrapper>
        <LoaderIcon size={20} color={theme.colors.surface} />
      </IconWrapper>
    )}
  </ButtonStyled>
);
