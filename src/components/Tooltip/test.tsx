import '@testing-library/jest-dom';

import { FiEdit } from 'react-icons/fi';

import theme from '@/styles/theme';
import { render } from '@/utils/jest/render';

import { Tooltip } from '.';
import { TooltipContent } from './styles';

describe('Tooltip', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Tooltip text="Lorem ipsum is typically">
        <TooltipContent>
          <FiEdit size={20} color={theme.colors.primaryMedium} />
        </TooltipContent>
      </Tooltip>
    );

    expect(container).toMatchSnapshot();
  });
});
