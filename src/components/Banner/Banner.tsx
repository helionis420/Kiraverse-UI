import { memo } from 'react';
import clsx from 'clsx';
import type { BannerProps } from './types';
import BannerWrap from './components/BannerWrap';
import BannerInner from './components/BannerInner';
import s from './Banner.module.css';

const Banner: React.FC<BannerProps> = ({
  className,
  children,
  withInnerBlock = true,
  withInnerImage = false,
  innerBlockSize = 'md',
  innerImgSrc,
  withIconsResponsive = false,
}) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <BannerWrap iconClassName={s.icons} withIconsResponsive={withIconsResponsive}>
        {withInnerBlock ? (
          <BannerInner
            hoverClassName={s['inner-hover']}
            withInnerImage={withInnerImage}
            innerImgSrc={innerImgSrc}
            size={innerBlockSize}
          >
            {children}
          </BannerInner>
        ) : (
          children
        )}
      </BannerWrap>
    </div>
  );
};

export default memo(Banner);
