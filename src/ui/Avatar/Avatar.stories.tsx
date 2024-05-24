import type { Meta, StoryObj } from '@storybook/react';
import type { AvatarProps } from './types';
import Avatar from './Avatar';
import s from './Avatar.stories.module.css';

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  } as AvatarProps,
};

export const BigSize: Story = {
  args: {
    ...WithImage.args,
    className: s.big,
  },
};

export const WithFallbackName: Story = {
  args: {
    fallbackName: 'JD',
  } as AvatarProps,
};

export const WithFallbackNameAndBigSize: Story = {
  args: {
    ...WithFallbackName.args,
    className: s.big,
  } as AvatarProps,
};

export const WithFallbackIcon: Story = {
  args: {
    fallbackIcon: 'icon-smile_48',
  } as AvatarProps,
};

export const WithFallbackIconAndBigSize: Story = {
  args: {
    ...WithFallbackIcon.args,
    className: s.big,
  } as AvatarProps,
};
