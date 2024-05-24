import { memo, useMemo } from 'react';
import clsx from 'clsx';
import type { UserMenuItemProps } from './types';
import Typography from '@/ui/Typography';
import Icon from '@/ui/Icon';
import s from './UserMenuItem.module.css';

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  className,
  iconId,
  disabled,
  label,
  onClick,
}) => {
  const classes = clsx(s.wrap, 'focus-primary', className);
  const innerJSX = useMemo(() => {
    return (
      <>
        <Icon className={s.icon} id={iconId} />
        <Typography className={s.label} variant="body-small-mono">
          {label}
        </Typography>
      </>
    );
  }, [iconId, label]);

  if (disabled) {
    return (
      <span className="flex items-center gap-2 py-[0.3125rem]">
        <Icon id={iconId} className="text-gray-500" />
        <span className="text-gray-500">{label}</span>
      </span>
    );
  }

  if (onClick) {
    return (
      <button className={classes} onClick={onClick}>
        {innerJSX}
      </button>
    );
  }

  return <span className={classes}>{innerJSX}</span>;
};

export default memo(UserMenuItem);
