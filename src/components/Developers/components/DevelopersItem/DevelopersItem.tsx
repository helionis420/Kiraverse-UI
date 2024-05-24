import { memo } from 'react';
import clsx from 'clsx';
import type { DevelopersItemProps } from './types';
import Icon from '@/ui/Icon';
import Typography from '@/ui/Typography';
import DevelopersItemDecor from './components/DevelopersItemDecor';
import DevelopersItemDecorSm from './components/DevelopersItemDecorSm';
import s from './DevelopersItem.module.css';

const DevelopersItem: React.FC<DevelopersItemProps> = ({ className, children, title, icon }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <DevelopersItemDecor className={s['desktop-decor']} />
      <DevelopersItemDecorSm className={s['mob-decor']} />
      <div className={s.holder}>
        <div className={s['icon-wrap']}>
          <Icon id={icon} className={s.icon} />
        </div>
        <div className={s.content}>
          <Typography className={s.title} component="h4" variant="headline-primary-uppercase">
            {title}
          </Typography>
          <div className={s.desc}>
            <Typography className={s.text} variant="body-large" component="p">
              {children}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DevelopersItem);
