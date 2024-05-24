import Icon, { type IconIdType, type IconSizeType } from '@/ui/Icon';
import { analyzeLink } from '@/utils/analyzeLink';
import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, memo } from 'react';
import s from './Button.module.css';
import ButtonInnerPrimary from './components/ButtonInnerPrimary';
import ButtonInnerSecondary from './components/ButtonInnerSecondary';
import { BUTTON_VARIANTS } from './constants';
import type { ButtonProps } from './types';

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      iconClassName,
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      responsive = false,
      icon,
      iconSide = 'left',
      href,
      onClick,
      ...rest
    },
    ref,
  ) => {
    let innerJSX: React.ReactNode = null;
    let iconJSX: React.ReactNode = null;
    const tabIndexProp = disabled ? { tabIndex: -1 } : {};

    // const disabledLinkHandler = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    //   e.preventDefault();
    // }, []);

    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        innerJSX = (
          <ButtonInnerPrimary
            className={s.inner}
            hoverClassName={s['inner-hover']}
            activeClassName={s['inner-active']}
            focusClassName={s['inner-focus']}
            disabledClassName={s['inner-disabled']}
            size={size}
            responsive={responsive}
          />
        );
        break;
      case BUTTON_VARIANTS.SECONDARY:
        innerJSX = (
          <ButtonInnerSecondary
            className={s.inner}
            hoverClassName={s['inner-hover']}
            activeClassName={s['inner-active']}
            focusClassName={s['inner-focus']}
            disabledClassName={s['inner-disabled']}
            size={size}
            responsive={responsive}
          />
        );
        break;
      default:
        break;
    }

    if (icon && iconSide) {
      const iconSize = 'md';

      iconJSX = (
        <span className={clsx(s['icon-wrap'], iconSide && s[`icon-${iconSide}`])}>
          <Icon
            id={icon as IconIdType}
            size={iconSize as IconSizeType}
            className={clsx(s.icon, iconClassName)}
          />
        </span>
      );
    }

    if (href) {
      const { isExternal } = analyzeLink(href);

      return (
        <Link
          className={clsx(
            s.button,
            s[variant],
            s[size],
            responsive && s.responsive,
            disabled && s.disabled,
            className,
          )}
          href={href}
          target={isExternal ? '_blank' : '_self'}
          rel="noreferrer"
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          {...tabIndexProp}
          {...rest}
        >
          {innerJSX}
          {iconJSX}
          <span className={s.wrap}>
            <span className={s.content}>{children}</span>
          </span>
        </Link>
      );
    }

    return (
      <button
        className={clsx(s.button, s[variant], s[size], responsive && s.responsive, className)}
        disabled={disabled}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        onClick={onClick}
        {...rest}
      >
        {innerJSX}
        {iconJSX}
        <span className={s.content}>{children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default memo(Button);
