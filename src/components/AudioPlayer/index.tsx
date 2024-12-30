import { FC } from 'react';

import { AudioPlayerContainer, AudioPlayerStyled } from './style';
import { Props } from './types';

export const AudioPlayer: FC<Props> = ({ minWidth,src }) => {
    return (
      <AudioPlayerContainer minWidth={minWidth}>
        <AudioPlayerStyled controls src={src}>
          Seu navegador não suporta o elemento de áudio.
        </AudioPlayerStyled>
      </AudioPlayerContainer>
    );
};