import { memo, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import type { HeaderProps } from './types';
import { ID_HERO } from '@/constants';
import { getAnchorHref } from '@/utils/common';
import { useGetBoundingClientRect } from '@/hooks/useGetBoundingClientRect';
import { useSetGlobalCustomProperty } from '@/hooks/useSetGlobalCustomProperty';
import useDocumentLockScrollY from '@/hooks/useDocumentLockScrollY';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useToggle } from '@/hooks/useToggle';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Nav from './components/Nav';
import NavSide from './components/NavSide';
import Hamburger from './components/Hamburger';
import s from './Header.module.css';

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, toggleIsMenuOpen, setIsMenuOpen] = useToggle();
  const [isMenuMobHidden, , setMenuMobHidden] = useToggle(true);
  const { lockDocumentScrollY, unlockDocumentScrollY } = useDocumentLockScrollY();
  const headerRef = useRef<HTMLElement>(null);
  const [headerClientRect] = useGetBoundingClientRect(headerRef);
  const isLaptop = useMediaQuery('(max-width: 1365px)');

  useSetGlobalCustomProperty(
    '--main-header-height',
    `${Math.round(headerClientRect?.height ?? 0)}px`,
  );

  const menuCloseHandler = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setMenuMobHidden(false);
      unlockDocumentScrollY();
    }
  }, [isMenuOpen, setIsMenuOpen, setMenuMobHidden, unlockDocumentScrollY]);

  const onToggler = useCallback(() => {
    toggleIsMenuOpen();
    setMenuMobHidden(false);
    if (!isMenuOpen) {
      lockDocumentScrollY();
      return;
    }
    unlockDocumentScrollY();
  }, [isMenuOpen, setMenuMobHidden, toggleIsMenuOpen, lockDocumentScrollY, unlockDocumentScrollY]);

  useEffect(() => {
    const unmounted = () => {
      setIsMenuOpen(false);
      setMenuMobHidden(true);
      unlockDocumentScrollY();
    };

    if (!isLaptop) {
      unmounted();
    }

    return () => {
      unmounted();
    };
  }, [isLaptop, setIsMenuOpen, setMenuMobHidden, unlockDocumentScrollY]);

  return (
    <header className={clsx(s.wrap, className)} ref={headerRef}>
      <Container className={s.container} withPaddingsSmX>
        <Link
          href={getAnchorHref(ID_HERO)}
          className={clsx(s['logo-link'], 'focus-primary')}
          scroll={false}
        >
          <Logo responsive />
        </Link>
        <Nav
          className={s.nav}
          active={isMenuOpen}
          hidden={isMenuMobHidden}
          onMenuClose={menuCloseHandler}
        />
        <NavSide className={s.side}>
          <Hamburger active={isMenuOpen} onToggler={onToggler} />
        </NavSide>
      </Container>
    </header>
  );
};

export default memo(Header);
