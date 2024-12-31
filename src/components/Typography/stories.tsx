import { colors } from '@/styles/theme';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';
import { TypographyAs, TypographyVariant, TypographyWeight } from './types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Typography',
  component: (args) => {
    return (
      <Flexbox maxWidth={args.textOverflow ? 50 : 1000}>
        <Typography {...args}>Lorem ipsum dolor sit amet.</Typography>
      </Flexbox>
    );
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.keys(colors),
      description: 'Cor do texto',
      table: {
        type: { summary: 'ColorsType' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: TypographyVariant,
    },
    weight: {
      control: { type: 'select' },
      options: TypographyWeight,
    },
    as: {
      control: { type: 'select' },
      options: TypographyAs,
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    variant: 'medium',
    weight: 'regular',
    as: 'p',
    color: 'primaryMedium',
    margin: 0,
    padding: 0,
    textOverflow: false,
  },
};
