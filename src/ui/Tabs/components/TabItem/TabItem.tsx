import { memo } from 'react';
import { Trigger as RadixTabsTrigger } from '@radix-ui/react-tabs';
import clsx from 'clsx';
import type { TabItemProps } from './types';
import Typography from '@/ui/Typography';
import Icon from '@/ui/Icon';
import s from './TabItem.module.css';

const TabItem: React.FC<TabItemProps> = ({ className, id, icon, title }) => {
  return (
    <RadixTabsTrigger key={id} className={clsx(s.wrap, className)} value={id}>
      <Icon className={s.icon} id={icon} />
      <Typography className={s.title} variant="body-small-mono">
        {title}
      </Typography>
    </RadixTabsTrigger>
  );
};

export default memo(TabItem);
