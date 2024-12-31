export interface ChatItem {
    name: string;
    id: string;
}

export interface Chat {
    title?: string;
    items: ChatItem[]
    main?: boolean;
}

export interface ChatsStoreProps {
    chats: Chat[];
};