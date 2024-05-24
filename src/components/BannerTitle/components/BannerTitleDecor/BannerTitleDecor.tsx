import { memo } from 'react';
import clsx from 'clsx';
import type { BannerTitleDecorProps } from './types';
import IconCornerLeft from './components/IconCornerLeft';
import IconCornerRight from './components/IconCornerRight';
import IconLineX from './components/IconLineX';
import IconLineY from './components/IconLineY';
import s from './BannerTitleDecor.module.css';

const BannerTitleDecor: React.FC<BannerTitleDecorProps> = ({ className, iconClassName }) => {
  return (
    <span className={clsx(s.wrap, className)}>
      <span className={s.top}>
        <IconCornerLeft className={iconClassName} side="left-top" />
        <IconLineX className={iconClassName} side="top" />
        <IconCornerRight className={iconClassName} side="right-top" />
      </span>
      <span className={s.middle}>
        <IconLineY className={iconClassName} side="left" />
        <IconLineY className={iconClassName} side="right" />
      </span>
      <span className={s.bottom}>
        <IconCornerLeft className={iconClassName} side="left-bottom" />
        <IconLineX className={iconClassName} side="bottom" />
        <IconCornerRight className={iconClassName} side="right-bottom" />
      </span>
    </span>
  );
};

export default memo(BannerTitleDecor);
