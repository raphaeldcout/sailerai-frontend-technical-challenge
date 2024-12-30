import styled from 'styled-components';

export const Root = styled.article`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacings.lg};
    background-color: ${({ theme }) => theme.colors.neutralLowLight};
    gap: ${({ theme }) => theme.spacings.sm};
    border-bottom-right-radius: ${({ theme }) => theme.borders.radius.md};
    border-bottom-left-radius: ${({ theme }) => theme.borders.radius.md};
`;

export const WrapperArea = styled.div`
    width: 60%;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    padding: ${({ theme }) => theme.spacings.lg};
    border-radius: ${({ theme }) => theme.borders.radius.lg};

    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacings.sm};
`;

export const WrapperActions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const WrapperImagesAttached = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacings.sm};
`;