import { FC } from 'react';

import { Typography } from '@/components/Typography';

import { AudioPlayerContainer, AudioPlayerStyled } from './style';
import { Props } from './types';

export const AudioPlayer: FC<Props> = ({ minWidth, src, ...props }) => (
  <AudioPlayerContainer minWidth={minWidth} {...props}>
    <AudioPlayerStyled controls src={src}>
      <Typography>Seu navegador não suporta o elemento de áudio.</Typography>
    </AudioPlayerStyled>
  </AudioPlayerContainer>
);
