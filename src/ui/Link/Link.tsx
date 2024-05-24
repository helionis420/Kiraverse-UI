import { memo, useCallback, forwardRef } from 'react';
import clsx from 'clsx';
import type { LinkProps } from './types';
import { analyzeLink } from '@/utils/analyzeLink';
import s from './Link.module.css';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className = s.default,
      children,
      variant = 'primary',
      href = '#',
      active,
      disabled,
      underline = false,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const tabIndexProp = disabled ? { tabIndex: -1 } : {};
    const { isExternal } = analyzeLink(href);

    const disabledLinkHandler = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
    }, []);

    return (
      <a
        ref={ref}
        className={clsx(
          s.link,
          s[variant],
          active && s.active,
          disabled && s.disabled,
          underline && s['link-underline'],
          'focus-primary',
          className,
        )}
        href={href}
        target={isExternal ? '_blank' : '_self'}
        onClick={disabled ? disabledLinkHandler : onClick}
        rel="noreferrer"
        {...tabIndexProp}
        {...rest}
      >
        <span>{children}</span>
      </a>
    );
  },
);

Link.displayName = 'Link';

export default memo(Link);
