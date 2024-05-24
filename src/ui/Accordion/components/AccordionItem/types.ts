import type { WithClassName, ObjValues } from '@/types';
import { ACCORDION_ITEM_TYPES } from '../../constants';

export type ItemType = ObjValues<typeof ACCORDION_ITEM_TYPES>;

export type AccordionChildrenItem = {
  /**
        The type of the item.
    */
  type: ItemType;
  /**
        The inner text of the item.
    */
  text?: string;
  /**
        The href of the Link.
    */
  href?: string;
};

export type AccordionItemType = {
  /**
      The id of the accordion item.
    */
  id: string;
  /**
      The title of the accordion item.
    */
  title: string;
  /**
      The items of the accordion item.
    */
  items: AccordionChildrenItem[];
};

export type AccordionItemProps = WithClassName<AccordionItemType>;
