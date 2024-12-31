import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';
import { screen } from '@testing-library/react';

import { AnimatedRecording } from '.';

describe('AnimatedRecording', () => {
  test('should match snapshot', () => {
    const { container } = render(<AnimatedRecording />);

    expect(container).toMatchSnapshot();
  });

  test('should show (N) wave from quantity props', () => {
    const n = 10;
    
    render(<AnimatedRecording quantity={n} />);

    const waveElements = screen.queryAllByTestId('root-recording-wave');

    expect(waveElements.length).toBe(n);
  });
});
