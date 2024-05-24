import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';
import type { IconCaptionLineDesktopDecorProps } from './types';
import DecorLineLeft from 'public/images/caption-decor/caption-decor-line-left.svg';
import DecorLineRight from 'public/images/caption-decor/caption-decor-line-right.svg';
import s from './IconCaptionLineDesktopDecor.module.css';

const IconCaptionLineDesktopDecor: React.FC<IconCaptionLineDesktopDecorProps> = ({
  className,
  side = 'left',
}) => {
  return (
    <div className={clsx(s.wrap, s[side], className)}>
      {side === 'left' ? (
        <Image className={s.image} src={DecorLineLeft} width={405} height={44} priority alt="" />
      ) : (
        <Image className={s.image} src={DecorLineRight} width={404} height={44} priority alt="" />
      )}
    </div>
  );
};

export default memo(IconCaptionLineDesktopDecor);
