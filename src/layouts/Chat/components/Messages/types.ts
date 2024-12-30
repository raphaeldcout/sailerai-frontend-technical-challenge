export interface Message {
    id: number;
    user_id: string;
    type: 'text' | 'audio' | 'image';
    content: string;
    timestamp: string;
    welcome?: boolean;
}

export interface OwnProps {
    messages: Message[];
};

export type Props = OwnProps;