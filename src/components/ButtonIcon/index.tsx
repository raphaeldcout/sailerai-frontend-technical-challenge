import { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const ButtonIcon: FC<Props> = ({ children, onClick, ...props }) => (
  <Root onClick={onClick} {...props}>
    {children}
  </Root>
);
