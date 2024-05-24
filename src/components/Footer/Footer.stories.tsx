import type { Meta, StoryObj } from '@storybook/react';
import type { FooterProps } from './types';
import Header from './Footer';

const meta = {
  title: 'components/Footer',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {} as FooterProps,
};
