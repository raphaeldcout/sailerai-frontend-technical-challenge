import '@testing-library/jest-dom';

import { Avatar } from '@/components/Avatar';
import { render } from '@/utils/jest/render';

import { Dropdown } from '.';
import { DropdownMenuItem, RightSlot } from './style';

describe('Dropdown', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <Dropdown
        elementTrigger={<Avatar src="/image-profile-1.png" clickable />}
      >
        <DropdownMenuItem>
          Meus dados <RightSlot>⌘+T</RightSlot>
        </DropdownMenuItem>
      </Dropdown>
    );

    expect(container).toMatchSnapshot();
  });
});
