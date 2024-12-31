import { Message } from '@/api/chat/fetchById/types';

export type WebSocketEventType = 'message_received' | 'presence_updated' | 'chat_read';

export interface MessageReceived extends Message {};

export interface PresenceUpdated {
    user_id: string,
    status: 'online' | 'offline' | 'typing';
    last_seen: string;
};