import { MessageTypes } from '@/api/chat/fetchById/types';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { MessageBubble } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/MessageBubble',
  component: (args) => {
    return (
      <Flexbox minWidth={800}>
        <MessageBubble {...args} />
      </Flexbox>
    );
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: MessageTypes,
      description: 'Tipo de mensagem',
      table: {
        type: { summary: 'ColorsType' },
      },
    },
    date: {
      control: { type: 'text' },
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    text: 'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman.',
    date: '12:75',
    isUser: false,
    type: 'text',
  },
};

export const Audio: Story = {
  args: {
    text: 'https://cdn.pixabay.com/audio/2021/08/09/audio_2f331550f9.mp3',
    date: '02:15',
    isUser: true,
    type: 'audio',
  },
};

export const Image: Story = {
  args: {
    text: 'https://picsum.photos/id/2/5000/3333',
    date: '22:41',
    isUser: false,
    type: 'image',
  },
};
