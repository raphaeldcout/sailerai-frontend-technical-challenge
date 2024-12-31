export const MessageTypes = ['text', 'audio', 'image'] as const;

export type MessageType = (typeof MessageTypes)[number];

export interface Message {
    id: string;
    user_id: string;
    type: MessageType;
    content: string;
    timestamp: string;
    welcome?: boolean;
};

export type Response = Message[];

export interface FetchParams {
    chat_id: string;
};
