import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';
import { screen } from '@testing-library/react';

import { MessageBubble } from '.';

describe('MessageBubble', () => {
  test('should match snapshot with text type', () => {
    const { container } = render(
      <MessageBubble
        text="Lorem ipsum is typically."
        date="00:00"
        isUser={false}
        type="text"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with image type', () => {
    const { container } = render(
      <MessageBubble
        text="https://picsum.photos/id/2/5000/3333"
        date="00:00"
        isUser={true}
        type="image"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should match snapshot with audio type', () => {
    const { container } = render(
      <MessageBubble
        text="https://cdn.pixabay.com/audio/2021/08/09/audio_2f331550f9.mp3"
        date="00:00"
        isUser={false}
        type="audio"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should show message text type', () => {
    render(
      <MessageBubble
        text="Lorem ipsum is typically."
        date="00:00"
        isUser={false}
        type="text"
      />
    );

    const element = screen.getByTestId('root-message-bubble-text');

    expect(element).toBeDefined();
  });

  test('should show message image type', () => {
    render(
      <MessageBubble
        text="https://picsum.photos/id/2/5000/3333"
        date="00:00"
        isUser={true}
        type="image"
      />
    );

    const element = screen.getByTestId('root-message-bubble-image');

    expect(element).toBeDefined();
  });

  test('should show message audio type', () => {
    render(
      <MessageBubble
        text="https://cdn.pixabay.com/audio/2021/08/09/audio_2f331550f9.mp3"
        date="00:00"
        isUser={false}
        type="audio"
      />
    );

    const element = screen.getByTestId('root-message-bubble-audio');

    expect(element).toBeDefined();
  });
});
