import { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const Typography: FC<Props> = ({
  as = 'p',
  children,
  color = 'surface',
  variant = 'medium',
  weight = 'regular',
  ...props
}) => (
  <Root as={as} variant={variant} weight={weight} color={color} {...props}>
    {children}
  </Root>
);