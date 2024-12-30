import { ReactNode } from 'react';

export interface TooltipProps {
  text: string
  tooltipPosition?: TooltipPositionVariants
  tooltipArrowPosition?: TooltipArrowPositionVariants
  children: ReactNode
  disabled?: boolean
};

export type TooltipPositionVariants = 'bottom' | 'top' | 'left' | 'right';

export type TooltipArrowPositionVariants = 'left' | 'right' | 'center';

export interface TooltipStyledProps {
  tooltipPosition: TooltipPositionVariants;
  tooltipArrowPosition: TooltipArrowPositionVariants;
};
