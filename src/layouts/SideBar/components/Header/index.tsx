import { FC } from 'react';

import Link from 'next/link';
import { FiEdit, FiMaximize2, FiMenu } from 'react-icons/fi';

import { ButtonIcon } from '@/components/ButtonIcon';
import { Tooltip } from '@/components/Tooltip';
import { TooltipContent } from '@/components/Tooltip/styles';
import theme from '@/styles/theme';

import { Root } from './style';
import { Props } from './types';

export const Header: FC<Props> = ({ handleCollapse, isCollapsed }) => {
  return (
    <Root isCollapsed={isCollapsed}>
      <Tooltip text="Nova conversa" tooltipPosition="right">
        <TooltipContent>
          <Link href="/chat/new">
            <ButtonIcon>
              <FiEdit size={20} color={theme.colors.surface} />
            </ButtonIcon>
          </Link>
        </TooltipContent>
      </Tooltip>

      <Tooltip
        text={isCollapsed ? 'Expandir menu' : 'Minimizar menu'}
        tooltipPosition="right"
      >
        <TooltipContent>
          <ButtonIcon onClick={handleCollapse}>
            {isCollapsed ? (
              <FiMaximize2 size={20} color={theme.colors.surface} />
            ) : (
              <FiMenu size={20} color={theme.colors.surface} />
            )}
          </ButtonIcon>
        </TooltipContent>
      </Tooltip>
    </Root>
  );
};
