import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextInput } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/TextInput',
  component: (args) => {
    return (
      <Flexbox minWidth={800}>
        <TextInput {...args} />
      </Flexbox>
    );
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    id: 'input',
    label: 'Name',
    value: '',
    onChange: fn(),
  },
};
