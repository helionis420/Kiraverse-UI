import type { TabsProps as RadixTabsRootProps } from '@radix-ui/react-tabs';
import type { WithClassName } from '@/types';
import type { TabItemType } from './components/TabItem';

export type TabsProps = WithClassName<{
  titles: TabItemType[];
}> &
  RadixTabsRootProps;
