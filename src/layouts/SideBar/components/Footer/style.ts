import styled from 'styled-components';

export const Root = styled.div`
    position: absolute;
    bottom: ${({ theme }) => theme.spacings.md};
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacings.sm};
    margin: ${({ theme }) => theme.spacings.xs} ${({ theme }) => theme.spacings.md};
    background-color: ${({ theme }) => theme.colors.primaryMedium};
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    padding: ${({ theme }) => theme.spacings.md};
`;