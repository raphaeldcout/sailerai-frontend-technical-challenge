
import { FC, Fragment } from 'react';

import theme from '@/styles/theme';
import * as TooltipRadix from '@radix-ui/react-tooltip';

import { Typography } from '../Typography';
import { TooltipStyled } from './styles';
import type { TooltipProps } from './types';

const DELAY_DURATION = 300;

export const Tooltip: FC<TooltipProps> = ({
  children,
  disabled = false,
  text,
  tooltipArrowPosition = 'center',
  tooltipPosition = 'top',
}) => {
  if (disabled) return <Fragment>{children}</Fragment>;

  return (
    <TooltipRadix.TooltipProvider
      disableHoverableContent
      delayDuration={DELAY_DURATION}
    >
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content style={{ zIndex: theme.zIndex.tooltip }} side={tooltipPosition}>
            <TooltipStyled
              tooltipPosition={tooltipPosition}
              tooltipArrowPosition={tooltipArrowPosition}
            >
              <Typography color="light" variant="xsmall" weight="medium">
                {text}
              </Typography>
            </TooltipStyled>
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.TooltipProvider>
  );
};
