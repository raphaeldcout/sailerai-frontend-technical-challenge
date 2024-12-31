import { Typography } from '@/components/Typography';
import { ColorsType, colors } from '@/styles/theme';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { AnimatedDots } from '.';

interface ComponentProps {
  colorType?: ColorsType;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/AnimatedDots',
  component: ({ colorType }: ComponentProps) => {
    return (
      <Flexbox>
        <Typography color={colorType} variant="xsmall" weight="light">
          Digitando
          <AnimatedDots />
        </Typography>
      </Flexbox>
    );
  },
  argTypes: {
    colorType: {
      control: { type: 'select' },
      options: Object.keys(colors),
      description: 'Cor do texto',
      table: {
        type: { summary: 'ColorsType' },
      },
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedDots>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    colorType: 'primaryLight',
  },
};
