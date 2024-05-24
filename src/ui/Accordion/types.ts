import type { WithClassName } from '@/types';
import type { AccordionItemType } from './components/AccordionItem';
import { AccordionImplSingleProps } from '@radix-ui/react-accordion';

export type AccordionProps = WithClassName<{
  /**
        The items of the accordion.
    */
  items: AccordionItemType[];
  defaultValue?: AccordionItemType['id'];
}> &
  AccordionImplSingleProps;
