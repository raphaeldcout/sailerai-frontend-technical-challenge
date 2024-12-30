import styled from 'styled-components';

export const Root = styled.article`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 0 ${({ theme }) => theme.spacings.lg};

    background-color: ${({ theme }) => theme.colors.neutralLowLight};
`;

export const Wrapper = styled.div`
    width: 100%;
    max-height: 300px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const DivElement = styled.div``;