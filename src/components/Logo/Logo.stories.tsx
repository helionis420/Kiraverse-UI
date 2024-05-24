import type { Meta, StoryObj } from '@storybook/react';
import type { LogoProps } from './types';
import Logo from './Logo';

const meta = {
  title: 'components/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { responsive: false } as LogoProps,
};
