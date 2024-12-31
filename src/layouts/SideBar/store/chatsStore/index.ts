import { Store } from '@tanstack/store';

import { Chat, ChatItem, ChatsStoreProps } from './types';

export const chatsStore = new Store<ChatsStoreProps>({
    chats: [
        { title: '', items: [{ name: 'Sailer AI - Welcome', id: 'sailer' }], main: true },
        {
            title: 'Grupos',
            items: [
                { name: 'Futebol Sábado ⚽', id: 'footbal' },
                { name: 'Works 🌎', id: 'jobs' },
                { name: 'Família  + Amigos 🗣️', id: 'family' },
            ],
        },
    ]
});

export const addChatCreated = (chat: ChatItem) => {
    chatsStore.setState((prev) => {
        const mainChats = prev.chats.find((chat) => chat?.main);

        if (!mainChats) return { ...prev };

        const newMainChats: Chat = {
            title: mainChats.title,
            items: [chat, ...mainChats.items],
            main: true,
        };

        return {
            chats: [newMainChats, ...prev.chats.filter((chat) => !chat?.main)],
        };
    });
};

export const addListOfChatsCreated = (chats: ChatItem[]) => {
    chatsStore.setState((prev) => {
        const mainChats = prev.chats.find((chat) => chat?.main);

        if (!mainChats) return { ...prev };

        const newMainChats: Chat = {
            title: mainChats.title,
            items: [...chats, mainChats.items[mainChats.items.length - 1]],
            main: true,
        };

        return {
            chats: [newMainChats, ...prev.chats.filter((chat) => !chat?.main)],
        };
    });
};
