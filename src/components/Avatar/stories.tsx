import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Avatar',
  component: (args) => {
    return (
      <Flexbox>
        <Avatar {...args} />
      </Flexbox>
    );
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    clickable: false,
    src: 'https://picsum.photos/id/2/5000/3333',
  },
};
