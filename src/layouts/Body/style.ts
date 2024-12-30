import styled from 'styled-components';

import { NAVBAR_HEIGHT } from '@/layouts/NavBar/style';

export const Root = styled.main`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacings.md};
    min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
`;