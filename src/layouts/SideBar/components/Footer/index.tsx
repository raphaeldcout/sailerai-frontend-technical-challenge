import { FC } from 'react';

import { Typography } from '@/components/Typography';

import { Root } from './style';

export const Footer: FC = () => (
  <Root>
    <Typography color="surface" variant="xsmall" weight="medium">
      Technical Challenge © {new Date().getFullYear()}
    </Typography>
    <Typography color="surface" variant="xsmall" weight="medium">
      Developed by: Raphael Melo
    </Typography>
  </Root>
);