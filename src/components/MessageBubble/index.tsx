import { FC } from 'react';

import { AudioPlayer } from '@/components/AudioPlayer';
import { Avatar } from '@/components/Avatar';
import { Typography } from '@/components/Typography';

import { Bubble, BubbleContainer, MessageDate, MessageText } from './style';
import { Props } from './types';

export const MessageBubble: FC<Props> = ({ date, isUser = false, text, type }) => {
  return (
    <BubbleContainer isUser={isUser}>
      <Bubble isUser={isUser}>
        {type === 'text' && (
          <MessageText>
            <Typography variant="small" color="background">
              {text}
            </Typography>
          </MessageText>
        )}

        {type === 'image' && <Avatar src={text} alt={text} />}

        {type === 'audio' && <AudioPlayer minWidth={300} src={text} />}

        <MessageDate>
          <Typography variant="xsmall" color="neutralLowDark" weight="medium">
            {date}
          </Typography>
        </MessageDate>
      </Bubble>
    </BubbleContainer>
  );
};