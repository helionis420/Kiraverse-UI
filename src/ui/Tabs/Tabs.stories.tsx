import type { Meta, StoryObj } from '@storybook/react';
import type { TabsProps } from './types';
import { MOCK_TABS_TITLES } from './Tabs.mocks';
import Tabs from './Tabs';

const meta = {
  title: 'ui/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    titles: MOCK_TABS_TITLES,
  } as TabsProps,
};
