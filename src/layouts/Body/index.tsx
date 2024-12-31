import { FC, PropsWithChildren } from 'react';

import { Root } from './style';

export const Body: FC<PropsWithChildren> = ({ children }) => <Root>{children}</Root>;