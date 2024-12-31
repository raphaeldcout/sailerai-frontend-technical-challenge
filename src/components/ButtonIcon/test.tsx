import '@testing-library/jest-dom';

import { FiSend } from 'react-icons/fi';

import theme from '@/styles/theme';
import { render } from '@/utils/jest/render';

import { ButtonIcon } from '.';

describe('ButtonIcon', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <ButtonIcon>
        <FiSend size={20} color={theme.colors.error} />
      </ButtonIcon>
    );

    expect(container).toMatchSnapshot();
  });
});
