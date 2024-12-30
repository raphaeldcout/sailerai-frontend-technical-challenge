import { FC } from 'react';

import { RecordingContainer, Wave } from './style';

export const AnimatedRecording: FC = () => (
  <RecordingContainer>
    <Wave />
    <Wave />
    <Wave />
    <Wave />
    <Wave />
  </RecordingContainer>
);