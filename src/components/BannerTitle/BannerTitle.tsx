import { memo } from 'react';
import clsx from 'clsx';
import type { BannerTitleProps } from './types';
import Typography from '@/ui/Typography';
import BannerTitleDecor from './components/BannerTitleDecor';
import BannerTitleDecorSm from './components/BannerTitleDecorSm';
import s from './BannerTitle.module.css';

const BannerTitle: React.FC<BannerTitleProps> = ({
  className,
  decorColorClassName = s.icons,
  classNameHolder,
  children,
  size = 'md',
}) => {
  return (
    <div className={clsx(s.wrap, s[size], className)}>
      <BannerTitleDecor className={s['decor-md']} iconClassName={decorColorClassName} />
      <BannerTitleDecorSm className={s['decor-sm']} iconClassName={decorColorClassName} />
      <div className={clsx(s.holder, classNameHolder)}>
        <Typography className={s.title} variant="headline-h2" component="h2">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default memo(BannerTitle);
