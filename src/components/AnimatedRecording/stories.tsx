import { colors } from '@/styles/theme';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { AnimatedRecording, QUANTITY_DEFAULT } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/AnimatedRecording',
  component: (args) => {
    return (
      <Flexbox>
        <AnimatedRecording {...args} />
      </Flexbox>
    );
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.keys(colors),
      description: 'Cor do elemento',
      table: {
        type: { summary: 'ColorsType' },
      },
    },
    quantity: {
      control: { type: 'number' }
    }
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedRecording>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    color: 'primaryLight',
    quantity: QUANTITY_DEFAULT,
  },
};
