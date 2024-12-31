import { ReactNode } from 'react';

export interface TooltipProps {
  text: string
  tooltipPosition?: TooltipPositionVariants
  tooltipArrowPosition?: TooltipArrowPositionVariants
  children: ReactNode
  disabled?: boolean
};

export const TooltipPositionVariant = ['bottom', 'top', 'left', 'right'] as const;

export type TooltipPositionVariants = (typeof TooltipPositionVariant)[number];

export const TooltipArrowPositionVariant = ['left', 'right', 'center'] as const;

export type TooltipArrowPositionVariants = (typeof TooltipArrowPositionVariant)[number];

export interface TooltipStyledProps {
  tooltipPosition: TooltipPositionVariants;
  tooltipArrowPosition: TooltipArrowPositionVariants;
};
