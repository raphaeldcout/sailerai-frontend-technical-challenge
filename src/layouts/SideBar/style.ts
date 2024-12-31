import styled, { css } from 'styled-components';

import { ItemProps, RootProps } from './types';

const SIDEBAR_WIDTH_COLLAPSED = 80;
const SIDEBAR_WIDTH_DEFAULT = 300;

export const Root = styled.nav<RootProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.primary};
    border-right: ${({ theme }) => theme.borders.width.thin} solid ${({ theme }) => theme.colors.border};
    width: ${({ isCollapsed }) => (isCollapsed ? `${SIDEBAR_WIDTH_COLLAPSED}px` : `${SIDEBAR_WIDTH_DEFAULT}px`)};
    transition: width 0.3s ease-in-out;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadows.md};
    padding: ${({ theme }) => theme.spacings.sm} 0;
`;

export const Section = styled.div`
    margin-bottom: ${({ theme }) => theme.spacings.lg};
`;

export const SectionButton = styled.div`
    width: 100%;
    padding: ${({ theme }) => `${theme.spacings.sm} ${theme.spacings.md}`} ;
 
`;

export const SectionTitle = styled.div<RootProps>`
    font-size: ${({ isCollapsed, theme }) => (isCollapsed ? theme.typography.fontSize.xs : theme.typography.fontSize.sm)};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryLight};
    text-transform: uppercase;
    padding: ${({ isCollapsed, theme }) => (isCollapsed ? `${theme.spacings.xs} ${theme.spacings.sm}` : `${theme.spacings.sm} ${theme.spacings.md}`)};
`;

export const Item = styled.div<ItemProps>`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: ${({ isCollapsed }) => (isCollapsed ? '10px' : '10px 16px')};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primaryLight : 'transparent')};
    transition: background-color 0.3s ease;
    margin: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.md};
    border-radius: ${({ theme }) => theme.spacings.xs};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryLight};
    }

    ${({ disabled }) => disabled && css`
        cursor: not-allowed;
    `}
`;