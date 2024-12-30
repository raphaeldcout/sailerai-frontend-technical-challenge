export interface OwnProps {
    name: string;
    typing: boolean;
    status: 'online' | 'offline';
};

export type Props = OwnProps;