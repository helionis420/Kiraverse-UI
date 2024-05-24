import { memo } from 'react';
import clsx from 'clsx';
import type { SocialsProps } from './types';
import { SOCIALS } from '@/constants';
import Icon, { type IconIdType } from '@/ui/Icon';
import Link from '@/ui/Link';
import s from './Socials.module.css';

const Socials: React.FC<SocialsProps> = ({ className }) => {
  return (
    <ul className={clsx(s.wrap, className)}>
      {SOCIALS.map((item, i) => {
        return (
          <li className={s.item} key={i}>
            <Link href={item.href} variant="secondary">
              <Icon id={item.id as IconIdType} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Socials);
