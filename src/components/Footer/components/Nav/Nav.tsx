import { memo } from 'react';
import clsx from 'clsx';
import type { NavProps } from './types';
import { MAIN_NAVIGATION } from '@/constants';
import NavLink from '@/ui/NavLink';
import s from './Nav.module.css';

const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={clsx(s.nav, className)} aria-label="footer navigation">
      <ul className={s.menu}>
        {MAIN_NAVIGATION.map((item) => {
          return (
            <li className={s.item} key={item.id}>
              <NavLink href={item.href} isScrollToCustom>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Nav);
