import { memo } from 'react';
import { Root as RadixTabsRoot, List as RadixTabsList } from '@radix-ui/react-tabs';
import clsx from 'clsx';
import type { TabsProps } from './types';
import TabItem from './components/TabItem';
import s from './Tabs.module.css';

const Tabs: React.FC<TabsProps> = ({ className, titles, children, ...rest }) => {
  return (
    <RadixTabsRoot className={clsx(s.wrap, className)} {...rest}>
      <RadixTabsList className={s['list-wrap']}>
        {titles.map((title) => {
          return <TabItem key={title.id} {...title} />;
        })}
      </RadixTabsList>
      {children}
    </RadixTabsRoot>
  );
};

export default memo(Tabs);
