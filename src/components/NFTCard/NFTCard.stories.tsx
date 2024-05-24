import type { Meta, StoryObj } from '@storybook/react';
import type { NFTCardProps } from './types';
import NFTCard from './NFTCard';
import s from './NFTCard.stories.module.css';

const meta = {
  title: 'components/NFTCard',
  component: NFTCard,
  tags: ['autodocs'],
} satisfies Meta<typeof NFTCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: NFTCardProps) => {
  return (
    <div className={s.wrap}>
      <NFTCard {...args} />
    </div>
  );
};

export const Base: Story = {
  args: {
    imgSrc: '/images/nft-test.webp',
    name: 'Kira Genesis',
    nick: '@loidonsaf',
    href: '#',
  } as NFTCardProps,
  render: Component,
};
