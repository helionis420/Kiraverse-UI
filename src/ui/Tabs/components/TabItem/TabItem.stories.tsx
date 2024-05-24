import type { Meta, StoryObj } from '@storybook/react';
import type { TabItemProps } from './types';
import { MOCK_TABS_TITLES } from '../../Tabs.mocks';
import Tabs from '../../Tabs';
import TabItem from './TabItem';

const meta = {
  title: 'ui/TabItem',
  component: TabItem,
  tags: ['autodocs'],
} satisfies Meta<typeof TabItem>;

export default meta;

type Story = StoryObj<typeof meta>;

const BaseComponent = () => {
  return <Tabs titles={[MOCK_TABS_TITLES[0]]} />;
};

const ActiveComponent = () => {
  return <Tabs titles={[MOCK_TABS_TITLES[0]]} defaultValue="tab-1" />;
};

export const Base: Story = {
  args: {} as TabItemProps,
  render: BaseComponent,
};

export const Active: Story = {
  args: {} as TabItemProps,
  render: ActiveComponent,
};
