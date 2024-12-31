import { Message } from '@/api/chat/fetchById/types';

export type Response = {
    status: string;
};

export interface FetchParams {
    chat_id: string;
    message: Omit<Message, 'id' | 'timestamp' | 'welcome'>;
};
