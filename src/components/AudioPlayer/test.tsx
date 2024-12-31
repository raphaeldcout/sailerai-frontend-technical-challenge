import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { AudioPlayer } from '.';

describe('AudioPlayer', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <AudioPlayer src="https://cdn.pixabay.com/audio/2021/08/09/audio_2f331550f9.mp3" />
    );

    expect(container).toMatchSnapshot();
  });
});
