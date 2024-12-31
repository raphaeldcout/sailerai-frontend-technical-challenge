'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { fetchById, sendMessage } from '@/api/chat';
import { Message } from '@/api/chat/fetchById/types';
import { API_URL_WS } from '@/commons/config';
import { useNavigation } from '@/hooks/useNavigation';
import { Body } from '@/layouts/Body';
import { Chat } from '@/layouts/Chat';
import { HandleSendMessage } from '@/layouts/Chat/components/Footer/types';
import { chatsStore } from '@/layouts/SideBar/store';
import { useStore } from '@tanstack/react-store';

import { PresenceUpdated, WebSocketEventType } from './types';

export default function ChatDynamic() {
  const { id } = useNavigation();
  const chatsCreated = useStore(chatsStore, (state) => state.chats);
  const [messages, setMessages] = useState<Message[]>([]);
  const [disabledActions, setDisabledActions] = useState(true);
  const socketRef = useRef<WebSocket | null>(null);
  const [status, setStatus] = useState<PresenceUpdated['status']>('online');

  const name = useMemo(
    () => chatsCreated[0].items.find((chat) => chat.id === id)?.name || '',
    [chatsCreated, id]
  );

  const getChat = useCallback(async () => {
    try {
      setDisabledActions(false);
      const chatsCreated = await fetchById({ chat_id: id });

      setMessages(chatsCreated);
    } catch (_) {
    } finally {
      setDisabledActions(true);
    }
  }, [id]);

  const handleSendMessage = useCallback(
    async ({ content, type }: HandleSendMessage) => {
      try {
        const message = { user_id: 'owner', type, content };

        await sendMessage({
          chat_id: id,
          message,
        });
      } catch (_) {}
    },
    [id]
  );

  useEffect(() => {
    /*
      This "useEffect" is used to fecth chat by Id.
    */

    getChat();
  }, [getChat]);

  useEffect(() => {
    /*
      This "useEffect" is used to create websocket connection to updating screen in the real times.
    */

    socketRef.current = new WebSocket(`${API_URL_WS}${id}`);

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const eventType = data.event as WebSocketEventType;

      if (eventType === 'message_received') {
        setMessages((prev) => [...prev, data.data]);
        return;
      }

      if (eventType === 'presence_updated') {
        const presenceUpdated = data.data as PresenceUpdated;
        setStatus(presenceUpdated.status);
        return;
      }
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [id]);

  return (
    <Body>
      <Chat
        name={name}
        typing={status === 'typing'}
        status={status}
        messages={messages}
        handleSendMessage={handleSendMessage}
        disabledActions={disabledActions}
      />
    </Body>
  );
}
