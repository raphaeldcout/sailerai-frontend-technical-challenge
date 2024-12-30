import { Message } from '@/layouts/Chat/components/Messages/types';

export interface HandleSendMessage {
    type: Message['type'];
    content: Message['content'];
}