import type { Meta, StoryObj } from '@storybook/react';
import type { CircleButtonProps } from './types';
import CircleButton from './CircleButton';
import s from './CircleButton.stories.module.css';

const meta = {
  title: 'ui/CircleButton',
  component: CircleButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CircleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Watch the trailer',
    iconId: 'icon-arrow-right_24',
    className: s.wrap,
  } as CircleButtonProps,
};
