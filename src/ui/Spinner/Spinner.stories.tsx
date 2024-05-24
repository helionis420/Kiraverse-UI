import type { Meta, StoryObj } from '@storybook/react';
import type { SpinnerProps } from './types';
import Spinner from './Spinner';

const meta = {
  title: 'ui/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {} as SpinnerProps,
};
