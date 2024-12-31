import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '.';
import { BadgeColors, VariantSizes } from './type';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Badge',
  component: (args) => {
    return (
      <Flexbox>
        <Badge {...args} />
      </Flexbox>
    );
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: BadgeColors,
      table: {
        type: { summary: 'BadgeColor' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: VariantSizes,
      table: {
        type: { summary: 'VariantSize' },
      },
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    color: 'positive',
    variant: 'medium',
  },
};
