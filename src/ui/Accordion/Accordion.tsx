import { memo } from 'react';
import { Root as RadixAccordionRoot } from '@radix-ui/react-accordion';
import clsx from 'clsx';
import type { AccordionProps } from './types';
import AccordionItem, { type AccordionItemType } from './components/AccordionItem';
import s from './Accordion.module.css';

const Accordion: React.FC<AccordionProps> = ({ className, items, defaultValue, ...rest }) => {
  return (
    <RadixAccordionRoot
      className={clsx(s.wrap, className)}
      type="single"
      defaultValue={defaultValue}
      collapsible
      {...rest}
    >
      {items.map((item: AccordionItemType) => {
        return <AccordionItem key={item.id} className={s.item} {...item} />;
      })}
    </RadixAccordionRoot>
  );
};

export default memo(Accordion);
