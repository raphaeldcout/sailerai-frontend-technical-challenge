import { FC } from 'react';

import {
  DropdownButtonTrigger,
  DropdownMenu,
  DropdownMenuContent
} from './style';
import { Props } from './types';

export const Dropdown: FC<Props> = ({ children, elementTrigger }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <DropdownButtonTrigger>{elementTrigger}</DropdownButtonTrigger>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenuContent sideOffset={5}>{children}</DropdownMenuContent>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
