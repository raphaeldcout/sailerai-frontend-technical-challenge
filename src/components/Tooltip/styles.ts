import styled, { DefaultTheme, css } from 'styled-components';

import { TooltipPositionVariants, TooltipStyledProps } from './types';

const tooltipBoxPositionStyles = {
  top: css`
    bottom: calc(100% + 15px);
  `,
  bottom: css`
    top: calc(100% + 15px);
  `,
  left: css`
    right: calc(100% + 15px);
  `,
  right: css`
    left: calc(100% + 15px);
  `,
};

const tooltipBoxAlignmentStyles = {
  top: {
    left: css`
      left: -24px;
    `,
    center: css`
      left: 50%;
      transform: translate(-50%, 0);
    `,
    right: css`
      right: -24px;
    `,
  },
  bottom: {
    left: css`
      left: -24px;
    `,
    center: css`
      left: 50%;
      transform: translate(-50%, 0);
    `,
    right: css`
      right: -24px;
    `,
  },
  left: {
    left: css`
      top: -22px;
    `,
    center: css`
      top: 50%;
      transform: translate(0, -52%);
    `,
    right: css`
      bottom: -18px;
    `,
  },
  right: {
    left: css`
      top: -22px;
    `,
    center: css`
      top: 50%;
      transform: translate(0, -52%);
    `,
    right: css`
      bottom: -18px;
    `,
  },
};

const arrowPositionStyles = {
  top: {
    left: css`
      left: 24px;
      top: 100%;
    `,
    center: css`
      left: 50%;
      top: 100%;
    `,
    right: css`
      left: calc(100% - 24px);
      top: 100%;
    `,
  },
  bottom: {
    left: css`
      left: 24px;
      bottom: 100%;
    `,
    center: css`
      bottom: 100%;
      left: 50%;
    `,
    right: css`
      bottom: 100%;
      left: calc(100% - 24px);
    `,
  },
  left: {
    left: css`
      right: -20px;
      top: 10px;
    `,
    center: css`
      right: -20px;
      top: 50%;
      transform: translate(0, -50%);
    `,
    right: css`
      right: -20px;
      bottom: 10px;
    `,
  },
  right: {
    left: css`
      left: -10px;
      top: 10px;
    `,
    center: css`
      left: -10px;
      top: 50%;
      transform: translate(0, -50%);
    `,
    right: css`
      left: -10px;
      bottom: 10px;
    `,
  },
};

const getTooltipArrowStyle = (
  tooltipPosition: TooltipPositionVariants,
  theme: DefaultTheme,
) => {
  switch (tooltipPosition) {
    case 'top':
      return `${theme.colors.primaryLight} transparent transparent transparent`;
    case 'bottom':
      return `transparent transparent ${theme.colors.primaryLight} transparent`;
    case 'left':
      return `transparent transparent  transparent ${theme.colors.primaryLight}`;
    case 'right':
      return `transparent ${theme.colors.primaryLight} transparent transparent`;
    default:
      return '';
  }
};

export const TooltipStyled = styled.div<TooltipStyledProps>`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  position: absolute;
  width: max-content;
  max-width: 270px;
  ${({ tooltipPosition }) => tooltipBoxPositionStyles[tooltipPosition]};
  ${({ tooltipArrowPosition, tooltipPosition }) =>
    tooltipBoxAlignmentStyles[tooltipPosition][tooltipArrowPosition]};
  transition: all 0.5s;

  & > p {
    word-break: break-word;
  }

  &::after {
    content: ' ';
    position: absolute;
    ${({ tooltipArrowPosition, tooltipPosition }) =>
      arrowPositionStyles[tooltipPosition][tooltipArrowPosition]};
    margin-left: -8px;
    border-width: 10px;
    border-style: solid;
    border-color: ${({ theme, tooltipPosition }) =>
      getTooltipArrowStyle(tooltipPosition, theme)};
  }
`;

export const TooltipContent = styled.div`
  display: inline-block;
  position: relative;
`;
