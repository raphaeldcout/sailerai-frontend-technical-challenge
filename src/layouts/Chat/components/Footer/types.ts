import { Message } from '@/layouts/Chat/components/Messages/types';

export interface HandleSendMessage {
    type: Message['type'];
    content: Message['content'];
}

export interface OwnProps {
    handleSendMessage: (props: HandleSendMessage) => void;
    disabledActions: boolean;
};

export type Props = OwnProps;