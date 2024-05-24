import { Fragment, memo } from 'react';
import clsx from 'clsx';
import { PolicyItemProps, PolicyItem, PolicyItemWithChildren } from './types';
import { POLICY_ITEMS_TYPES } from '../../constants';
import Typography from '@/ui/Typography';
import Link from '@/ui/Link';
import s from './PolicyItem.module.css';

const PolicyItem: React.FC<PolicyItemProps> = ({
  type,
  text = '',
  href = '',
  wrap = false,
  childrenItems = [],
  items = [],
  className,
}) => {
  const getContentJSX = ({ type, text, href, wrap }: PolicyItem) => {
    let contentJSX: React.ReactNode = null;

    if (!text) {
      return;
    }

    switch (type) {
      case POLICY_ITEMS_TYPES.TITLE:
      case POLICY_ITEMS_TYPES.TEXT:
      case POLICY_ITEMS_TYPES.SUBTITLE:
        contentJSX = text;
        break;
      case POLICY_ITEMS_TYPES.LINK:
        contentJSX = (
          <Link className={clsx(s.wrap, s.link)} href={href} variant="tertiary">
            {text}
          </Link>
        );
        break;
      default:
        break;
    }

    if (wrap) {
      return <span className={s.child}>{contentJSX}</span>;
    }

    return contentJSX;
  };

  if (type === POLICY_ITEMS_TYPES.TITLE) {
    return (
      <Typography
        className={clsx(s.wrap, s.title, className)}
        variant="headline-primary-uppercase"
        component="h3"
      >
        {getContentJSX({ type, text, href, wrap })}
        {childrenItems.map((item, i) => {
          return <Fragment key={i}>{getContentJSX(item)}</Fragment>;
        })}
      </Typography>
    );
  }

  if (type === POLICY_ITEMS_TYPES.SUBTITLE) {
    return (
      <Typography
        className={clsx(s.wrap, s.subtitle, className)}
        variant="headline-uppercase"
        component="h4"
      >
        {getContentJSX({ type, text, href, wrap })}
        {childrenItems.map((item, i) => {
          return <Fragment key={i}>{getContentJSX(item)}</Fragment>;
        })}
      </Typography>
    );
  }

  if (type === POLICY_ITEMS_TYPES.UL) {
    return (
      <ul>
        {items.map((item: PolicyItemWithChildren, i) => {
          return (
            <li key={i}>
              <Typography
                className={clsx(s.wrap, s.text, className)}
                variant="body-large"
                component="p"
              >
                {getContentJSX(item)}
                {item?.childrenItems?.map((item: PolicyItem, y) => {
                  return <Fragment key={y}>{getContentJSX(item)}</Fragment>;
                })}
              </Typography>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <Typography className={clsx(s.wrap, s.text, className)} variant="body-large" component="p">
      {getContentJSX({ type, text, href, wrap })}
      {childrenItems.map((item, i) => {
        return <Fragment key={i}>{getContentJSX(item)}</Fragment>;
      })}
    </Typography>
  );
};

export default memo(PolicyItem);
