import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import type { BannerProps } from './types';
import { INNER_BLOCK_SIZES } from './constants';
import Typography from '@/ui/Typography';
import Button from '@/ui/Button';
import Banner from './Banner';
import s from './Banner.stories.module.css';

Button.displayName = 'Button';

const meta = {
  title: 'components/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

const ComponentWithInnerBlockMd = (args: BannerProps) => {
  const { innerBlockSize: size } = args;
  return (
    <div className={clsx(s.wrap, s[size])}>
      <Banner {...args} className={s.banner}>
        <div className="my-auto w-full text-center">
          <Typography variant="headline-h3" component="h3">
            Enter the Kiraverse
          </Typography>
          <div className="mt-12 sm:mt-8">
            <Button className={s.btn} onClick={() => {}} size="md" variant="primary">
              Enter
            </Button>
          </div>
        </div>
      </Banner>
    </div>
  );
};

const ComponentWithInnerBlockSm = (args: BannerProps) => {
  const { innerBlockSize: size } = args;
  return (
    <div className={clsx(s.wrap, s[size])}>
      <Banner {...args} className={s.banner}>
        <div className="my-auto w-full text-center">
          <Typography variant="headline-primary-uppercase" component="h3">
            There are no NFts yet
          </Typography>
          <div className="mt-3.5">
            <Typography variant="body-large" className={s.desc}>
              Check another categories
            </Typography>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export const Base: Story = {
  args: { withInnerBlock: false } as BannerProps,
};

export const WithInnerBlockMd: Story = {
  args: {
    withInnerBlock: true,
    withInnerImage: true,
    innerBlockSize: INNER_BLOCK_SIZES.MD,
  } as BannerProps,
  render: ComponentWithInnerBlockMd,
};

export const WithInnerBlockSm: Story = {
  ...WithInnerBlockMd.args,
  args: { withInnerImage: false, innerBlockSize: INNER_BLOCK_SIZES.SM } as BannerProps,
  render: ComponentWithInnerBlockSm,
};
