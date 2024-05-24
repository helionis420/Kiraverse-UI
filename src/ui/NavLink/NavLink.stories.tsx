import type { Meta, StoryObj } from '@storybook/react';
import { NavLinkProps } from './types';
import NavLink from './NavLink';

NavLink.displayName = 'NavLink';

const meta = {
  title: 'ui/NavLink',
  component: NavLink,
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Home',
    href: '/',
  } as NavLinkProps,
};
