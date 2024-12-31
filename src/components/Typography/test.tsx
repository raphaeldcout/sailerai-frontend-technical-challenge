import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { Typography } from '.';

describe('Typography', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Typography>Lorem ipsum is typically.</Typography>
    );

    expect(container).toMatchSnapshot();
  });
});
