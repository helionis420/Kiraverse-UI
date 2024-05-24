import { memo } from 'react';
import clsx from 'clsx';
import type { LinksProps } from './types';
import { FOOTER_LINKS } from '@/constants';
import NavLink from '@/ui/NavLink';
import s from './Links.module.css';

const Links: React.FC<LinksProps> = ({ className }) => {
  return (
    <ul className={clsx(s.wrap, className)}>
      {FOOTER_LINKS.map((item) => {
        return (
          <li className={s.item} key={item.id}>
            <NavLink className={s.link} href={item.href} uppercase={false}>
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Links);
