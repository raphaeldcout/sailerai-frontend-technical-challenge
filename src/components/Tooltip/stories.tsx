import { FiEdit } from 'react-icons/fi';

import theme from '@/styles/theme';
import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';
import { ButtonIcon } from '../ButtonIcon';
import { TooltipContent } from './styles';
import { TooltipArrowPositionVariant, TooltipPositionVariant } from './types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Tooltip',
  component: (args) => {
    return (
      <Flexbox>
        <Tooltip {...args} />
      </Flexbox>
    );
  },
  argTypes: {
    tooltipPosition: {
      control: { type: 'select' },
      options: TooltipPositionVariant,
    },
    tooltipArrowPosition: {
      control: { type: 'select' },
      options: TooltipArrowPositionVariant,
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    disabled: false,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tooltipPosition: 'top',
    tooltipArrowPosition: 'center',
    children: (
      <TooltipContent>
        <ButtonIcon>
          <FiEdit size={20} color={theme.colors.primaryMedium} />
        </ButtonIcon>
      </TooltipContent>
    ),
  },
};
