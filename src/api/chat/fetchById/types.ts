export interface Message {
    id: string;
    user_id: string;
    type: 'text' | 'audio' | 'image';
    content: string;
    timestamp: string;
    welcome?: boolean;
};

export type Response = Message[];

export interface FetchParams {
    chat_id: string;
};
