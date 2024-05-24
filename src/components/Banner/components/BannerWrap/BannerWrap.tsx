import { memo } from 'react';
import clsx from 'clsx';
import type { BannerWrapProps } from './types';
import IconCorner from './components/IconCorner';
import s from './BannerWrap.module.css';

const BannerWrap: React.FC<BannerWrapProps> = ({
  className,
  iconClassName,
  children,
  withIconsResponsive = false,
}) => {
  return (
    <div
      className={clsx(
        s.wrap,
        {
          [s.responsive]: withIconsResponsive,
        },
        className,
      )}
    >
      <div className={s.items}>
        <IconCorner className={iconClassName} side="left-top" responsive={withIconsResponsive} />
        <IconCorner className={iconClassName} side="right-top" responsive={withIconsResponsive} />
      </div>
      <div className={s.holder}>{children}</div>
      <div className={s.items}>
        <IconCorner className={iconClassName} side="left-bottom" responsive={withIconsResponsive} />
        <IconCorner
          className={iconClassName}
          side="right-bottom"
          responsive={withIconsResponsive}
        />
      </div>
    </div>
  );
};

export default memo(BannerWrap);
