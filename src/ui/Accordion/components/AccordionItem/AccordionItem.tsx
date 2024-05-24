import { Fragment, memo } from 'react';
import {
  Item as RadixAccordionItem,
  Trigger as RadixAccordionTrigger,
  Content as RadixAccordionContent,
} from '@radix-ui/react-accordion';
import clsx from 'clsx';
import type { AccordionItemProps, AccordionChildrenItem } from './types';
import { ACCORDION_ITEM_TYPES } from '../../constants';
import Typography from '@/ui/Typography';
import Link from '@/ui/Link';
import s from './AccordionItem.module.css';

const AccordionItem: React.FC<AccordionItemProps> = ({ className, id, title, items }) => {
  const getContentJSX = ({ type, text, href }: AccordionChildrenItem) => {
    let contentJSX: React.ReactNode = null;

    if (!text) {
      return;
    }

    switch (type) {
      case ACCORDION_ITEM_TYPES.TEXT:
        contentJSX = text;
        break;
      case ACCORDION_ITEM_TYPES.LINK:
        contentJSX = (
          <Link className={clsx(s.child, s.link)} href={href} variant="tertiary">
            {text}
          </Link>
        );
        break;
      default:
        break;
    }

    return contentJSX;
  };

  return (
    <RadixAccordionItem className={clsx(s.wrap, className)} value={id}>
      <RadixAccordionTrigger className={s.trigger}>
        <span className={s.indicator} />
        <Typography className={s.title} variant="body-large-uppercase" component="h5">
          {title}
        </Typography>
      </RadixAccordionTrigger>
      <RadixAccordionContent className={s.content}>
        <span className={s.inner}>
          <Typography className={s.description} variant="body-small-mono" component="span">
            {items.map((item, i) => {
              return <Fragment key={i}>{getContentJSX(item)}</Fragment>;
            })}
          </Typography>
        </span>
      </RadixAccordionContent>
    </RadixAccordionItem>
  );
};

export default memo(AccordionItem);
