import { Flexbox } from '@/utils/storybook/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '.';
import { Avatar } from '../Avatar';
import { DropdownMenuItem, RightSlot } from './style';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Dropdown',
  component: (args) => {
    return (
      <Flexbox>
        <Dropdown {...args}>
          <DropdownMenuItem>
            Meus dados <RightSlot>⌘+T</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Integrações <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Configurações <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenuItem>
        </Dropdown>
      </Flexbox>
    );
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Principal: Story = {
  args: {
    elementTrigger: <Avatar src="/image-profile-1.png" clickable />,
  },
};
