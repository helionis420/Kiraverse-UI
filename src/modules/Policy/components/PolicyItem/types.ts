import type { FCProps, ObjValues } from '@/types';
import { POLICY_ITEMS_TYPES } from '../../constants';

export type PolicyItemType = ObjValues<typeof POLICY_ITEMS_TYPES>;

export type PolicyItem = {
  /**
        The type of the item.
    */
  type: PolicyItemType;
  /**
        The inner text of the item.
    */
  text?: string;
  /**
        If true, the item is wrapping.
    */
  wrap?: boolean;
  /**
        The href of the Link.
    */
  href?: string;
};

export type PolicyItemWithChildren = {
  /**
        The children of item.
    */
  childrenItems?: PolicyItem[];
} & PolicyItem;

export type PolicyItemWithUL = {
  /**
        The items of list.
    */
  items?: PolicyItem[];
} & PolicyItemWithChildren;

export type PolicyItemProps = FCProps<PolicyItemWithUL>;
