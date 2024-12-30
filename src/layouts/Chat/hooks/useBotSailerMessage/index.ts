import { useCallback, useMemo } from 'react';

import { sailerMessagesStore } from '@/layouts/Chat/components/Messages/store';
import { Message } from '@/layouts/Chat/components/Messages/types';
import { sailerWelcome } from '@/utils/chat/sailerWelcome';
import { useStore } from '@tanstack/react-store';

export const useBotSailerMessage = () => {
    const sailerMessages = useStore(
        sailerMessagesStore,
        (state) => state.sailerMessages
    );

    const initialLoderMessagesDone = useMemo(() => 
        sailerMessages.filter((message) => message?.welcome).length === sailerWelcome.length, [sailerMessages]);

    const addMessageWithoutDuplication = useCallback((message: Message) => {
        sailerMessagesStore.setState(({ sailerMessages }) => {
            if (!sailerMessages.find((m) => m.content === message.content)) {
                return { sailerMessages: [...sailerMessages, message] };
            }

            return { sailerMessages };
        });
    }, []);

    const addMessage = useCallback((message: Message) => {
        sailerMessagesStore.setState(({ sailerMessages }) => {
            return { sailerMessages: [...sailerMessages, message] };
        });
    }, []);

    return { addMessage, addMessageWithoutDuplication, sailerMessages, initialLoderMessagesDone };
};