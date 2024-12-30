import { FC } from 'react';

import { AnimatedDots } from '@/components/AnimatedDots';
import { Avatar } from '@/components/Avatar';
import { Badge } from '@/components/Badge';
import { Typography } from '@/components/Typography';

import { Root, WrapperInfos } from './style';
import { Props } from './types';

export const Header: FC<Props> = ({ name, status, typing }) => {
  const isOnline = status === 'online' && !typing; 
  const isOffline = status === 'offline' && !typing;

  return (
    <Root>
      <Avatar src="/robot-profile.jpg" />

      <WrapperInfos>
        <Typography variant="small" weight="medium">
          {name}
        </Typography>

        {isOnline && (
          <Typography variant="xsmall" weight="light">
            Online <Badge variant="medium" color="positive" />
          </Typography>
        )}

        {isOffline && (
          <Typography variant="xsmall" weight="light">
            Offline <Badge variant="medium" color="neutral" />
          </Typography>
        )}

        {typing && (
          <Typography variant="xsmall" weight="light">
            Digitando
            <AnimatedDots />
          </Typography>
        )}
      </WrapperInfos>
    </Root>
  );
};
