import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';
import type { CaptionInnerProps } from './types';
import IconCaptionLineDesktopDecor from './components/IconCaptionLineDesktopDecor';
import IconCaptionLineMobile from './components/IconCaptionLineMobile';
import DecorInner from 'public/images/caption-decor/caption-decor-inner.svg';
import s from './CaptionInner.module.css';

const CaptionInner: React.FC<CaptionInnerProps> = ({ className, children }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <IconCaptionLineDesktopDecor className={s.desktop} side="left" />
      <IconCaptionLineMobile className={s.mob} side="left" />
      <div className={s.holder}>
        <Image className={s.image} src={DecorInner} width={272} height={44} priority alt="" />
        <div className={s.content}>{children}</div>
      </div>
      <IconCaptionLineDesktopDecor className={s.desktop} side="right" />
      <IconCaptionLineMobile className={s.mob} side="right" />
    </div>
  );
};

export default memo(CaptionInner);
