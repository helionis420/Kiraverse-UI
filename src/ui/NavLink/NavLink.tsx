import { useRouter } from 'next/router';
import Link from 'next/link';
import { memo, forwardRef } from 'react';
import clsx from 'clsx';
import type { NavLinkProps } from './types';
import { scrollTo } from '@/utils/common';
import ComponentLink from '@/ui/Link';
import s from './NavLink.module.css';
import { SCROLL_DURATION } from '@/constants';

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      className,
      children,
      href = '#',
      exact,
      uppercase = true,
      responsive = false,
      active = false,
      isScrollToCustom = false,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const { pathname, asPath } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const targetId = e.currentTarget.href.replace(/.*#/, '');
      const elem = document.getElementById(targetId);

      if (isScrollToCustom && elem) {
        const hash = asPath.replace(/.*#/, '');
        window.history.pushState('', '', asPath.replace(`#${hash}`, ''));
        e.preventDefault();
        const headerHeight =
          parseInt(document.documentElement.style.getPropertyValue('--main-header-height')) || 0;
        const top = elem?.offsetTop - headerHeight;

        const timer = setTimeout(() => {
          scrollTo(document.documentElement, top, SCROLL_DURATION);
          clearTimeout(timer);
        }, 300);
      }
    };

    return (
      <Link ref={ref} href={href} passHref legacyBehavior scroll={false}>
        <ComponentLink
          {...rest}
          className={clsx(
            s.link,
            isActive && s.active,
            uppercase && 'uppercase',
            responsive && s.responsive,
            className,
          )}
          active={isActive || active}
          onClick={handleScroll}
          disabled={disabled}
        >
          {children}
        </ComponentLink>
      </Link>
    );
  },
);

NavLink.displayName = 'NavLink';

export default memo(NavLink);
