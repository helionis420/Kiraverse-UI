import type { Meta, StoryObj } from '@storybook/react';
import type { LinkProps } from './types';
import { LINK_VARIANTS } from './constants';
import Link from './Link';

Link.displayName = 'Link';

const meta = {
  title: 'ui/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Label',
    variant: LINK_VARIANTS.PRIMARY,
    href: '#',
  } as LinkProps,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: LINK_VARIANTS.SECONDARY,
  } as LinkProps,
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    variant: LINK_VARIANTS.TERTIARY,
  } as LinkProps,
};
