'use client';

import { Body } from '@/layouts/Body';
import { Chat } from '@/layouts/Chat';
import { useBotSailerMessage } from '@/layouts/Chat/hooks/useBotSailerMessage';

export default function Home() {
  const {
    handleSendMessage,
    initialLoderMessagesDone,
    sailerMessages,
  } = useBotSailerMessage();

  return (
    <Body>
      <Chat
        name="Sailer AI - Welcome"
        typing={!initialLoderMessagesDone}
        status="online"
        messages={sailerMessages}
        handleSendMessage={handleSendMessage}
        disabledActions={initialLoderMessagesDone}
      />
    </Body>
  );
}
