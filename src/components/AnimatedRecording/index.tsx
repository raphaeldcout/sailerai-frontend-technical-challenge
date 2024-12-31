import { FC } from 'react';

import { RecordingContainer, Wave } from './style';
import { Props } from './types';

export const QUANTITY_DEFAULT = 5;

export const AnimatedRecording: FC<Props> = ({
  color = 'surface',
  quantity = QUANTITY_DEFAULT,
}) => (
  <RecordingContainer>
    {Array(quantity)
      .fill(null)
      .map((_, index) => (
        <Wave
          data-testid="root-recording-wave"
          key={index}
          color={color}
          quantity={quantity}
        />
      ))}
  </RecordingContainer>
);
