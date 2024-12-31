import { FC } from 'react';

import { Footer, Header, Messages } from './components';
import { Root } from './style';
import { Props } from './types';

export const Chat: FC<Props> = ({
  disabledActions,
  handleSendMessage,
  messages,
  name,
  status,
  typing,
}) => {
  return (
    <Root>
      <Header name={name} typing={typing} status={status} />
      <Messages messages={messages} />
      <Footer
        handleSendMessage={handleSendMessage}
        disabledActions={disabledActions}
      />
    </Root>
  );
};
