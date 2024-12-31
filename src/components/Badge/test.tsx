import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { Badge } from '.';

describe('Badge', () => {
  test('should match snapshot', () => {
    const { container } = render(<Badge />);

    expect(container).toMatchSnapshot();
  });
});
