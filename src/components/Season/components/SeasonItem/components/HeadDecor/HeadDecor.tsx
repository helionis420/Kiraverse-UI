import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';
import type { HeadDecorProps } from './types';
import DecorIconShadow from 'public/images/season-decor/season-header-shadow.svg';
import DecorIcon from 'public/images/season-decor/season-header-icon.svg';
import DecorIconMobShadow from 'public/images/season-decor/season-header-mob-shadow.svg';
import DecorIconMob from 'public/images/season-decor/season-header-mob-icon.svg';
import s from './HeadDecor.module.css';

const HeadDecor: React.FC<HeadDecorProps> = ({ className }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.decor}>
        <Image
          className={clsx(s['decor-shadow'], s.desktop)}
          src={DecorIconShadow}
          priority
          alt=""
        />
        <Image className={clsx(s.icon, s.desktop)} src={DecorIcon} priority alt="" />
        <Image
          className={clsx(s['decor-shadow'], s.mob)}
          src={DecorIconMobShadow}
          priority
          alt=""
        />
        <Image className={clsx(s.icon, s.mob)} src={DecorIconMob} priority alt="" />
      </div>
    </div>
  );
};

export default memo(HeadDecor);
