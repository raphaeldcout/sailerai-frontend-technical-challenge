import { FC } from 'react';

import { Image, Root } from './style';
import { Props } from './types';

export const Avatar: FC<Props> = ({ alt = 'image', clickable = false, src }) => (
  <Root clickable={clickable}>
    <Image src={src} alt={alt} fill objectFit="cover" />
  </Root>
);
