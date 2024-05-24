import { memo } from 'react';
import clsx from 'clsx';
import type { BannerTitleDecorSmProps } from './types';
import IconCornerSm from './components/IconCornerSm';
import IconLineYSm from './components/IconLineYSm';
import IconLineXSm from './components/IconLineXSm';
import s from './BannerTitleDecorSm.module.css';

const BannerTitleDecorSm: React.FC<BannerTitleDecorSmProps> = ({ className, iconClassName }) => {
  return (
    <span className={clsx(s.wrap, className)}>
      <span className={s.top}>
        <IconCornerSm className={iconClassName} side="left-top" />
        <span className={s['line-top']}>
          <IconLineXSm className={iconClassName} side="top" />
        </span>
        <IconCornerSm className={iconClassName} side="right-top" />
      </span>
      <span className={s.middle}>
        <IconLineYSm className={iconClassName} side="left" />
        <IconLineYSm className={iconClassName} side="right" />
      </span>
      <span className={s.bottom}>
        <IconCornerSm className={iconClassName} side="left-bottom" />
        <span className={s['line-bottom']}>
          <IconLineXSm className={iconClassName} side="bottom" />
        </span>
        <IconCornerSm className={iconClassName} side="right-bottom" />
      </span>
    </span>
  );
};

export default memo(BannerTitleDecorSm);
