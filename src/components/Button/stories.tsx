import { FiEdit, FiSend } from 'react-icons/fi';

import theme, { colors } from '@/styles/theme';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: (args) => {
    return (
      <Flexbox>
        <Button {...args} />
      </Flexbox>
    );
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.keys(colors),
      description: 'Cor do botão',
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    color: 'successLight',
    animated: false,
    disabled: false,
    iconLeft: <FiEdit size={20} color={theme.colors.surface} />,
    label: 'Botão',
    loading: false,
    onClick: fn(),
    responsiveMode: false,
  },
};

export const Animated: Story = {
  args: {
    color: 'successLight',
    animated: true,
    disabled: false,
    iconRight: <FiSend size={20} color={theme.colors.surface} />,
    label: 'Botão',
    loading: false,
    onClick: fn(),
    responsiveMode: false,
  },
};

export const Disabled: Story = {
  args: {
    color: 'error',
    animated: false,
    disabled: true,
    label: 'Botão',
    loading: false,
    onClick: fn(),
    responsiveMode: false,
  },
};

export const Loading: Story = {
  args: {
    color: 'background',
    animated: false,
    disabled: false,
    label: 'Botão',
    loading: true,
    onClick: fn(),
    responsiveMode: false,
  },
};

export const ResponsiveMode: Story = {
  args: {
    color: 'primaryMedium',
    iconRight: <FiSend size={20} color={theme.colors.surface} />,
    animated: false,
    disabled: false,
    label: 'Botão',
    loading: false,
    onClick: fn(),
    responsiveMode: true,
  },
};
