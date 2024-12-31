import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { AnimatedDots } from '.';

describe('AnimatedDots', () => {
  test('should match snapshot', () => {
    const { container } = render(<AnimatedDots />);

    expect(container).toMatchSnapshot();
  });
});
