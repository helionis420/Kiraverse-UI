import type { Meta, StoryObj } from '@storybook/react';
import type { TagProps } from './types';
import Tag from './Tag';

const meta = {
  title: 'ui/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Tag',
  } as TagProps,
};

export const WithOverlappingText: Story = {
  args: {
    children: 'Tag with overlapping text',
  } as TagProps,
};
