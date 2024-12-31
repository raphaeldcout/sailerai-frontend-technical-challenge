import styled from 'styled-components';

import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '@/styles/keyframes';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export { DropdownMenu };

export const DropdownButtonTrigger = styled.button`
  all: unset;
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 220px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: ${({ theme }) => theme.spacings.xs};
  padding: ${({ theme }) => theme.spacings.sm};
  box-shadow: 
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side='top'] {
    animation-name: ${slideDownAndFade};
  }
  &[data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
  &[data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }
  &[data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  cursor: not-allowed;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.xs};
  color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.spacings.xs};
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 ${({ theme }) => theme.spacings.sm};
  position: relative;
  user-select: none;
  outline: none;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.border};
    pointer-events: none;
  }
`;

export const DropdownMenuLabel = styled(DropdownMenu.Label)`
  padding: 0 ${({ theme }) => theme.spacings.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  color: ${({ theme }) => theme.colors.border};
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacings.sm};
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.colors.light};
`;

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.surface};

  [data-highlighted] > & {
    color: ${({ theme }) => theme.colors.light};
  }

  [data-disabled] & {
    color: ${({ theme }) => theme.colors.border};
  }
`;
