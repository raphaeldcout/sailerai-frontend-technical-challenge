'use client';

import { FC, useState } from 'react';

import { FiSend } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import theme from '@/styles/theme';

import { Footer, Header } from './components';
import {
  Item,
  Root,
  Section,
  SectionButton,
  SectionTitle,
} from './style';

const sections = [
  {
    title: 'Grupos',
    items: ['Futebol Sábado ⚽', 'Works 🌎', 'Família  + Amigos 🗣️'],
  },
];

export const SideBar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <Root isCollapsed={isCollapsed}>
      <Header isCollapsed={isCollapsed} handleCollapse={handleCollapse} />

      <SectionButton>
        <Button
          icon={<FiSend size={20} color={theme.colors.surface} />}
          label="Iniciar uma conversa"
          responsiveMode={isCollapsed}
        />
      </SectionButton>

      {sections.map((section, index) => (
        <Section key={index}>
          {section.title && (
            <SectionTitle isCollapsed={isCollapsed}>
              <Typography color="surface" variant="xsmall" weight="bold">
                {section.title}
              </Typography>
            </SectionTitle>
          )}

          {section.items.map((item) => (
            <Item
              key={item}
              isActive={item === activeItem}
              onClick={() => setActiveItem(item)}
            >
              {!isCollapsed && <Typography>{item}</Typography>}
            </Item>
          ))}
        </Section>
      ))}

      {!isCollapsed && <Footer />}
    </Root>
  );
};
