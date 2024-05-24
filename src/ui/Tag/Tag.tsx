import { memo } from 'react';
import clsx from 'clsx';
import type { TagProps } from './types';
import Typography from '@/ui/Typography';
import TagDefaultDecor from './components/TagDefaultDecor';
import TagHoverDecor from './components/TagHoverDecor';
import TagFocusDecor from './components/TagFocusDecor';
import s from './Tag.module.css';

const Tag: React.FC<TagProps> = ({ className, children, active, ...rest }) => {
  return (
    <button className={clsx(s.wrap, active && s.active, className)} {...rest}>
      <span className={s['content-wrap']}>
        <Typography className={s.content} variant="headline-secondary">
          {children}
        </Typography>
      </span>
      <TagDefaultDecor className={clsx(s.decor, s.default)} />
      <TagHoverDecor className={clsx(s.decor, s.hover)} />
      <TagFocusDecor className={clsx(s.decor, s.focus)} />
    </button>
  );
};

export default memo(Tag);
