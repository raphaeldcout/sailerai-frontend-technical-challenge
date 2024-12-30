import styled, { css } from 'styled-components';

import { AudioPlayerContainerProps } from './types';

export const AudioPlayerContainer = styled.div<AudioPlayerContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  audio {
    width: 100%;
    outline: none;
  }

  ${({ minWidth }) => minWidth && css({ minWidth })};
`;

export const AudioPlayerStyled = styled.audio``;