import { PresenceUpdated } from '@/app/chat/[...id]/types';

export interface OwnProps {
    name: string;
    typing: boolean;
    status?: PresenceUpdated['status'];
};

export type Props = OwnProps;