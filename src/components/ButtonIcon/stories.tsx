import { FiSend } from 'react-icons/fi';

import theme, { colors } from '@/styles/theme';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonIcon } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ButtonIcon',
  component: (args) => {
    return (
      <Flexbox>
        <ButtonIcon {...args}>
          <FiSend size={20} color={theme.colors.error} />
        </ButtonIcon>
      </Flexbox>
    );
  },
  argTypes: {
    backgrounColor: {
      control: { type: 'select' },
      options: Object.keys(colors),
      description: 'Cor de fundo',
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
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    onClick: fn(),
    backgrounColor: 'border'
  },
};
