import type { Meta, StoryObj } from '@storybook/react';
import type { PlayerItemProps } from './types';
import PlayerItem from './PlayerItem';

const meta = {
  title: 'ui/PlayerItem',
  component: PlayerItem,
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    avatarUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    name: 'jynx345',
    place: 2,
  } as PlayerItemProps,
};

export const FirstPlace: Story = {
  args: {
    ...Base.args,
    place: 1,
  } as PlayerItemProps,
};

export const WithOverlappingName: Story = {
  args: {
    ...Base.args,
    name: 'Sensai Sweaty Ted Kaz Sensai Sweaty Ted Kaz',
  } as PlayerItemProps,
};

export const WithOverlappingPlace: Story = {
  args: {
    ...Base.args,
    place: 1234567890,
  } as PlayerItemProps,
};
