import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { TextArea } from '.';

describe('TextArea', () => {
  test('should match snapshot', () => {
    const { container } = render(<TextArea value='' handleInputChange={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
