import '@testing-library/jest-dom';

import { render } from '@/utils/jest/render';

import { TextInput } from '.';

describe('TextInput', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <TextInput id="text-input" label="Label" value="" onChange={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });
});
