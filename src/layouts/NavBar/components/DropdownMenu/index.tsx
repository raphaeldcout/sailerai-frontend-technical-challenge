import { FC } from 'react';

import { Avatar } from '@/components/Avatar';
import { Dropdown } from '@/components/Dropdown';
import {
  DropdownMenuArrow,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  RightSlot,
} from '@/components/Dropdown/style';

export const DropdownMenu: FC = () => {
  // TODO: Implement features in the future.
  
  return (
    <Dropdown elementTrigger={<Avatar src="/image-profile-1.png" clickable />}>
      <DropdownMenuItem>
        Meus dados <RightSlot>⌘+T</RightSlot>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Integrações <RightSlot>⌘+N</RightSlot>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Configurações <RightSlot>⇧+⌘+N</RightSlot>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuLabel>Sailer AI - Serviços</DropdownMenuLabel>
      <DropdownMenuItem>
        Upgrade de Plano <RightSlot>⌘+P</RightSlot>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Ajuda <RightSlot>⌘+H</RightSlot>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <DropdownMenuItem>
        Sair <RightSlot>⌘+L</RightSlot>
      </DropdownMenuItem>

      <DropdownMenuArrow />
    </Dropdown>
  );
};
