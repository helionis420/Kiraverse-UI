import type { Meta, StoryObj } from '@storybook/react';
import type { UserMenuProps } from './types';
import UserMenu from './UserMenu';

const meta = {
  title: 'ui/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof UserMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: UserMenuProps) => {
  return (
    <header className="flex items-center justify-end">
      <UserMenu {...args} />
    </header>
  );
};

export const WithoutWalletWithAvatarImage: Story = {
  args: {
    userInfo: {
      fallbackName: 'John Doe',
      url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      fallbackIcon: 'icon-smile_48',
      nickName: '@alexsmith',
    },
  } as UserMenuProps,
  render: Component,
};

export const WithoutWalletWithoutAvatarImage: Story = {
  args: {
    userInfo: {
      fallbackName: 'John Doe',
      fallbackIcon: 'icon-smile_48',
      nickName: '@alexsmith',
    },
  } as UserMenuProps,
  render: Component,
};

export const WithWallet: Story = {
  args: {
    ...WithoutWalletWithAvatarImage.args,
    walletAddress: '0x1234567890123456789012345678901234567890',
  } as UserMenuProps,
  render: Component,
};

export const WithOverlappingNickName: Story = {
  args: {
    ...WithoutWalletWithAvatarImage.args,
    userInfo: {
      ...WithoutWalletWithAvatarImage?.args?.userInfo,
      nickName: '@alexsmithalexsmithalexsmithalexsmithalexsmith',
    },
  } as UserMenuProps,
  render: Component,
};
