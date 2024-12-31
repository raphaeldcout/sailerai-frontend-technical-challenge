'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import { FiSend } from 'react-icons/fi';

import { fetchList } from '@/api/chat';
import { Button } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';
import { Typography } from '@/components/Typography';
import { useNavigation } from '@/hooks/useNavigation';
import theme from '@/styles/theme';
import { useStore } from '@tanstack/react-store';

import { Footer, Header } from './components';
import { chatsStore } from './store';
import { addListOfChatsCreated } from './store/chatsStore';
import { Item, Root, Section, SectionButton, SectionTitle } from './style';

export const SideBar: FC = () => {
  const { id } = useNavigation();
  const chats = useStore(chatsStore, (state) => state.chats);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  const getCreatedChats = useCallback(async () => {
    try {
      const chatsCreated = await fetchList();

      addListOfChatsCreated(
        chatsCreated.map((chat) => ({
          name: chat.participants[0],
          id: chat.chat_id,
        }))
      );
    } catch (_) {}
  }, []);

  useEffect(() => {
    /*
      This "useEffect" is used to fecth list of the all chat created.
    */

    getCreatedChats();
  }, [getCreatedChats]);

  return (
    <Root isCollapsed={isCollapsed}>
      <Header isCollapsed={isCollapsed} handleCollapse={handleCollapse} />

      <SectionButton>
        <Link href="/chat/new">
          <Button
            animated
            iconLeft={<FiSend size={20} color={theme.colors.surface} />}
            label="Iniciar uma conversa"
            responsiveMode={isCollapsed}
          />
        </Link>
      </SectionButton>

      {chats.map((section, index) => (
        <Section key={index}>
          {section.title && (
            <SectionTitle isCollapsed={isCollapsed}>
              <Typography color="surface" variant="xsmall" weight="bold">
                {section.title}
              </Typography>
            </SectionTitle>
          )}

          {section.items.map((item) => (
            <Tooltip
              disabled={!isCollapsed}
              key={item.name}
              text={item.name}
              tooltipPosition="right"
            >
              <Link href={item?.disabled ? '#' : `/chat/${item.id}`}>
                <Item
                  isCollapsed={isCollapsed}
                  disabled={item?.disabled}
                  isActive={item.id === id}
                >
                  <Typography textOverflow variant={isCollapsed ? 'xsmall' : 'medium'}>
                    {isCollapsed
                      ? `${item.name.charAt(0)}${item.name.charAt(
                          1
                        )}${item.name.charAt(2)}`
                      : item.name}
                  </Typography>
                </Item>
              </Link>
            </Tooltip>
          ))}
        </Section>
      ))}

      {!isCollapsed && <Footer />}
    </Root>
  );
};
