import { memo } from 'react';
import clsx from 'clsx';
import type { CaptionProps } from './types';
import Typography from '@/ui/Typography';
import CaptionInner from './components/CaptionInner';
import s from './Caption.module.css';

const Caption: React.FC<CaptionProps> = ({ className, title }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <CaptionInner className={s.decor}>
        <Typography className={s.title} variant="body-small">
          {title}
        </Typography>
      </CaptionInner>
    </div>
  );
};

export default memo(Caption);
