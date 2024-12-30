'use client';

import { FC } from 'react';

import Image from 'next/image';

import { DropdownMenu } from './components';
import { Root } from './style';

export const NavBar: FC = () => {
  return (
    <Root>
      <Image
        src="/logo_sailer.svg"
        alt="Sailer Logo"
        width={100}
        height={35}
        priority
      />

      <DropdownMenu />
    </Root>
  );
};
