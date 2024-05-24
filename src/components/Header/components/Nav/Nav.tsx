import { memo } from 'react';
import clsx from 'clsx';
import type { NavProps } from './types';
import { IDS_SECTIONS, MAIN_NAVIGATION } from '@/constants';
import useScrollSPY from '@/hooks/useScrollSPY';
import NavLink from '@/ui/NavLink';
import s from './Nav.module.css';

const Nav: React.FC<NavProps> = ({ className, active, hidden, onMenuClose }) => {
  const activeId = useScrollSPY(IDS_SECTIONS, 110);

  const handlerClick = () => {
    onMenuClose();
  };

  return (
    <nav
      className={clsx(s.nav, active && s.active, hidden && s.hidden, className)}
      aria-label="main navigation"
    >
      <div className={s.holder}>
        <ul className={s.menu}>
          {MAIN_NAVIGATION.map((item) => {
            return (
              <li className={s.item} key={item.id} onClick={handlerClick}>
                <NavLink
                  href={item.href}
                  active={item.href.split('#')[1] === activeId}
                  isScrollToCustom
                  responsive
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Nav);
