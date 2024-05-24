import type { WithClassName } from '@/types';
import type { IconIdType } from '@/ui/Icon';

export type TabItemType = {
  /**
      The id of the tab item.
    */
  id: string;
  /**
      The icon of the tab item.
    */
  icon: IconIdType;
  /**
      The title of the tab item.
     */
  title: string;
};

export type TabItemProps = WithClassName<TabItemType>;
