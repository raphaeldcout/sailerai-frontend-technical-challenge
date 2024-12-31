import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { AlertResponsive } from '.';

describe('AlertResponsive', () => {
  test('should match snapshot', () => {
    const { container } = render(<AlertResponsive />);

    expect(container).toMatchSnapshot();
  });
});
