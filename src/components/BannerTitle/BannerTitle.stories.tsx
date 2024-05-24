import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import type { BannerTitleProps } from './types';
import { BANNER_SIZES } from './constants';
import BannerTitle from './BannerTitle';
import s from './BannerTitle.stories.module.css';

const meta = {
  title: 'components/BannerTitle',
  component: BannerTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof BannerTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

const Component = (args: BannerTitleProps) => {
  const { size } = args;
  return (
    <div className={clsx(s.wrap, s[size])}>
      <BannerTitle {...args} />
    </div>
  );
};

export const BannerTitleMd: Story = {
  args: {
    children: 'About kiraverse',
    size: BANNER_SIZES.MD,
  } as BannerTitleProps,
  render: Component,
};

export const BannerTitleSm: Story = {
  args: {
    ...BannerTitleMd.args,
    size: BANNER_SIZES.SM,
  } as BannerTitleProps,
  render: Component,
};
