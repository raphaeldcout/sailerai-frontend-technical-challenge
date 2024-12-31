import { Message } from '@/api/chat/fetchById/types';

export type { Message };

export interface OwnProps {
    messages: Message[];
};

export type Props = OwnProps;