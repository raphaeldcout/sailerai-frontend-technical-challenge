export interface ChatItem {
    name: string;
    id: string;
    disabled?: boolean;
}

export interface Chat {
    title?: string;
    items: ChatItem[]
    main?: boolean;
}

export interface ChatsStoreProps {
    chats: Chat[];
};