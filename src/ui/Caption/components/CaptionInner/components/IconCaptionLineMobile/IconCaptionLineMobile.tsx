import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';
import type { IconCaptionLineMobileProps } from './types';
import DecorLineLeft from 'public/images/caption-decor/caption-decor-line-mob-left.svg';
import DecorLineRight from 'public/images/caption-decor/caption-decor-line-mob-right.svg';
import s from './IconCaptionLineMobile.module.css';

const IconCaptionLineMobile: React.FC<IconCaptionLineMobileProps> = ({
  className,
  side = 'left',
}) => {
  return (
    <div className={clsx(s.wrap, s[side], className)}>
      {side === 'left' ? (
        <Image className={s.image} src={DecorLineLeft} width={50} height={44} priority alt="" />
      ) : (
        <Image className={s.image} src={DecorLineRight} width={54} height={44} priority alt="" />
      )}
    </div>
  );
};

export default memo(IconCaptionLineMobile);
