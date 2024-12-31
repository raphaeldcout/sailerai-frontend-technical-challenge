import { FC, useEffect, useRef } from 'react';

import { format, parseISO } from 'date-fns';

import { MessageBubble } from '@/components/MessageBubble';

import { DivElement, Root, Wrapper } from './style';
import { Props } from './types';

export const Messages: FC<Props> = ({ messages }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /*
      This "useEffect" is used to scroll down the screen until the last message sent is visible.
    */

    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Root>
      <Wrapper>
        {messages.map((message, index) => (
          <MessageBubble
            key={`${index}-${message.id}`}
            text={message.content}
            date={format(parseISO(message.timestamp), 'HH:mm')}
            isUser={message.user_id === 'owner'}
            type={message.type}
          />
        ))}
        <DivElement ref={messageEndRef} />
      </Wrapper>
    </Root>
  );
};
