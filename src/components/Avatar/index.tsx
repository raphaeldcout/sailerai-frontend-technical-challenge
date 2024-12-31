import { FC } from 'react';

import { Image, Root } from './style';
import { Props } from './types';

export const Avatar: FC<Props> = ({
  alt = 'image',
  clickable = false,
  src,
  ...props
}) => (
  <Root data-testid="root-avatar" clickable={clickable} {...props}>
    <Image src={src} alt={alt} fill objectFit="cover" />
  </Root>
);
