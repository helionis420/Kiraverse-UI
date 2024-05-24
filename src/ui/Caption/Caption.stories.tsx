import type { Meta, StoryObj } from '@storybook/react';
import type { CaptionProps } from './types';
import Caption from './Caption';

const meta = {
  title: 'ui/Caption',
  component: Caption,
  tags: ['autodocs'],
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'About Us',
  } as CaptionProps,
};

export const WithOverlappingTitle: Story = {
  args: {
    title: 'This is overlapping title',
  } as CaptionProps,
};
