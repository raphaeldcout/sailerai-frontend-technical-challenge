import { Message } from '@/layouts/Chat/components/Messages/types';

export interface OwnProps {
    text: string;
    date: string;
    isUser?: boolean;
    type: Message['type'];
};

export interface BubbleStyledProps {
    isUser: OwnProps['isUser'];
}

export type Props = OwnProps;