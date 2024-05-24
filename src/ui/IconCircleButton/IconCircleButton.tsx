import { memo, useMemo, forwardRef } from 'react';
import clsx from 'clsx';
import type { IconCircleButtonProps } from './types';
import Icon, { type IconSizeType, type IconIdType } from '@/ui/Icon';
import s from './IconCircleButton.module.css';

const IconCircleButton = forwardRef<HTMLButtonElement, IconCircleButtonProps>(
  (
    {
      className,
      iconClassName,
      variant = 'primary',
      disabled = false,
      reverse,
      icon,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const iconSize = 'md';

    const iconJSX = useMemo(() => {
      if (!icon) {
        return null;
      }

      return (
        <Icon
          id={icon as IconIdType}
          size={iconSize as IconSizeType}
          className={clsx(s.icon, iconClassName)}
        />
      );
    }, [icon, iconSize, iconClassName]);

    return (
      <button
        className={clsx(s.button, s[variant], reverse && s.reverse, className)}
        disabled={disabled}
        ref={ref}
        onClick={onClick}
        {...rest}
      >
        {iconJSX}
      </button>
    );
  },
);

IconCircleButton.displayName = 'IconCircleButton';

export default memo(IconCircleButton);
