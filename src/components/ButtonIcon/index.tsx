import { FC } from 'react';

import { Root } from './style';
import { Props } from './types';

export const ButtonIcon: FC<Props> = ({
  backgrounColor = 'primaryLight',
  children,
  onClick,
  ...props
}) => (
  <Root
    backgrounColor={backgrounColor}
    onClick={onClick}
    {...props}
  >
    {children}
  </Root>
);
