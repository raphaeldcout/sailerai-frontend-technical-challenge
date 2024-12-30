import { FC } from 'react';

import { Root } from './style';
import { Props } from './type';

export const Badge: FC<Props> = ({ color = 'positive', variant = 'medium' }) => (
  <Root color={color} variant={variant} />
);