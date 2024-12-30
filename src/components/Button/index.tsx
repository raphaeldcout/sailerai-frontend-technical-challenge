import { FC } from 'react';

import { Typography } from '@/components/Typography';

import { ButtonStyled, IconWrapper } from './style';
import { Props } from './types';

export const Button: FC<Props> = ({
  icon,
  label,
  onClick,
  responsiveMode = false,
}) => (
  <ButtonStyled responsiveMode={responsiveMode} onClick={onClick}>
    <IconWrapper>{icon}</IconWrapper>
    {!responsiveMode && <Typography weight="medium">{label}</Typography>}
  </ButtonStyled>
);
