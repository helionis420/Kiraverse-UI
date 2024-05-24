import { Root as RadixRadioGroup } from '@radix-ui/react-radio-group';
import type { Meta, StoryObj } from '@storybook/react';
import type { WalletButtonProps } from './types';
import WalletButton from './WalletButton';

const meta = {
  title: 'ui/WalletButton',
  component: WalletButton,
  tags: ['autodocs'],
} satisfies Meta<typeof WalletButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const RadioWrap = (args: WalletButtonProps) => {
  return (
    <RadixRadioGroup>
      <WalletButton {...args} />
    </RadixRadioGroup>
  );
};

const CheckedRadioWrap = (args: WalletButtonProps) => {
  return (
    <RadixRadioGroup defaultValue={args.id}>
      <WalletButton {...args} />
    </RadixRadioGroup>
  );
};

export const WithLogo: Story = {
  args: {
    id: 'metamask',
    title: 'MetaMask',
    logoName: 'metamask',
  } as WalletButtonProps,
  render: RadioWrap,
};

export const WithLogoChecked: Story = {
  args: {
    id: 'metamask',
    title: 'MetaMask',
    logoName: 'metamask',
  } as WalletButtonProps,
  render: CheckedRadioWrap,
};

export const WithoutLogo: Story = {
  args: {
    id: 'email',
    title: 'Add wallet using Email',
  } as WalletButtonProps,
  render: RadioWrap,
};
export const WithoutLogoChecked: Story = {
  args: {
    id: 'email',
    title: 'Add wallet using Email',
  } as WalletButtonProps,
  render: CheckedRadioWrap,
};
