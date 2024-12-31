import { useCallback, useEffect, useMemo } from 'react';

import { HandleSendMessage } from '@/layouts/Chat/components/Footer/types';
import { sailerMessagesStore } from '@/layouts/Chat/components/Messages/store';
import { Message } from '@/layouts/Chat/components/Messages/types';
import { DELAY_TIMER, sailerWelcome } from '@/utils/chat/sailerWelcome';
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

    const handleSendMessage = useCallback(
        ({ content, type }: HandleSendMessage) => {
            addMessage({
                id: new Date().getTime().toString(),
                user_id: 'owner',
                type,
                content,
                timestamp: new Date().toISOString(),
            });
        },
        [addMessage]
    );

    useEffect(() => {
        /*
            This "useEffect" is used to display standard messages from time to time, creating a more pleasant experience.
        */

        if (initialLoderMessagesDone) return;

        let timerIds: NodeJS.Timeout[] = [];

        sailerWelcome.forEach((message, index) => {
            const timerId = setTimeout(() => {
                addMessageWithoutDuplication(message);
            }, index * DELAY_TIMER);

            timerIds.push(timerId);
        });

        return () => {
            timerIds.forEach((timerId) => clearTimeout(timerId));
        };
    }, [addMessageWithoutDuplication, initialLoderMessagesDone]);

    return { addMessage, addMessageWithoutDuplication, sailerMessages, initialLoderMessagesDone, handleSendMessage };
};