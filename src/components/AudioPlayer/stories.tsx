import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { AudioPlayer } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/AudioPlayer',
  component: (args) => {
    return (
      <Flexbox>
        <AudioPlayer {...args} />
      </Flexbox>
    );
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AudioPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    minWidth: 300,
    src: 'https://cdn.pixabay.com/audio/2021/08/09/audio_2f331550f9.mp3',
  },
};
