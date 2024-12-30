'use client';

import { FC, useEffect } from 'react';

import { DELAY_TIMER, sailerWelcome } from '@/utils/chat/sailerWelcome';

import { Footer, Header, Messages } from './components';
import { useBotSailerMessage } from './hooks/useBotSailerMessage';
import { Root } from './style';

export const Chat: FC = () => {
  const {
    addMessageWithoutDuplication,
    initialLoderMessagesDone,
    sailerMessages,
  } = useBotSailerMessage();

  useEffect(() => {
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
  }, [addMessageWithoutDuplication]);

  return (
    <Root>
      <Header
        name="Sailer AI - Welcome"
        typing={!initialLoderMessagesDone}
        status="online"
      />

      <Messages messages={sailerMessages} />

      <Footer />
    </Root>
  );
};
