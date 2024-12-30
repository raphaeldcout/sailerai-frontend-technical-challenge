import { PropsWithChildren, ReactNode } from 'react';

export interface OwnProps extends PropsWithChildren {
    elementTrigger: ReactNode;
};

export type Props = OwnProps;