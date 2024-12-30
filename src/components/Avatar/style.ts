import ImageNext from 'next/image';
import styled, { css } from 'styled-components';

import { RootStyledProps } from './types';

export const Root = styled.figure<RootStyledProps>`
  ${({ clickable }) => clickable && css`cursor: pointer;`}
  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.borders.width.thick} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  width: 40px;
  height: 40px;
`;

export const Image = styled(ImageNext)`
  border-radius: ${({ theme }) => theme.borders.radius.md};
`;