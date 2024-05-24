import { memo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import type { FooterProps } from './types';
import { ID_HERO } from '@/constants';
import { getAnchorHref } from '@/utils/common';
import Container from '@/components/Container';
import Typography from '@/ui/Typography';
import Logo from '@/components/Logo';
import Nav from './components/Nav';
import Socials from './components/Socials';
import Links from './components/Links';
import s from './Footer.module.css';

const Header: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(s.wrap, className)}>
      <Container>
        <div className={s.holder}>
          <Link
            href={getAnchorHref(ID_HERO)}
            className={clsx(s['logo-link'], 'focus-primary')}
            scroll={false}
          >
            <Logo />
          </Link>
          <Nav className={s.nav} />
          <Socials />
        </div>
        <div className={s.bottom}>
          <Links />
          <Typography className={s.copy} variant="body-small-mono" component="span">
            &copy; Copyright Kiraverse {new Date().getFullYear()}, All Rights Reserved
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default memo(Header);
