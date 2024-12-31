import { FC, useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { FiEdit } from 'react-icons/fi';

import { create } from '@/api/chat';
import { formGroupStore } from '@/app/chat/new/components/FormGroup/store';
import { Button } from '@/components/Button';
import { addChatCreated } from '@/layouts/SideBar/store/chatsStore';
import theme from '@/styles/theme';
import { useStore } from '@tanstack/react-store';

import { Root } from './style';

export const Footer: FC = () => {
  const router = useRouter();
  const { firstParticipantInputValue, secondParticipantInputValue } = useStore(
    formGroupStore,
    (state) => state
  );
  const [loadingCreateNewChat, setLoadingCreateNewChat] = useState(false);

  const handleCreateNewChat = useCallback(async () => {
    try {
      setLoadingCreateNewChat(true);

      const chatCreated = await create({
        firstName: firstParticipantInputValue,
        secondName: secondParticipantInputValue,
      });

      formGroupStore.setState((prev) => ({
        ...prev,
        firstParticipantInputValue: ''
      }));

      addChatCreated({
        name: chatCreated.participants[0],
        id: chatCreated.chat_id,
      });

      router.push(`/chat/${chatCreated.chat_id}`);
    } catch (_) {
    } finally {
      setLoadingCreateNewChat(false);
    }
  }, [firstParticipantInputValue, router, secondParticipantInputValue]);

  return (
    <Root>
      <Button
        iconRight={<FiEdit size={20} color={theme.colors.surface} />}
        label="Criar"
        disabled={loadingCreateNewChat || !firstParticipantInputValue.trim()}
        loading={loadingCreateNewChat}
        onClick={handleCreateNewChat}
      />
    </Root>
  );
};
