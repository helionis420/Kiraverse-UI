import { forwardRef, memo } from 'react';
import { Root as SwitchRoot, Thumb as SwitchThumb } from '@radix-ui/react-switch';
import clsx from 'clsx';
import type { SwitcherProps } from './types';
import s from './Switcher.module.css';

const Switcher = forwardRef<HTMLButtonElement, SwitcherProps>(
  ({ className, checked, disabled, onCheckedChange, ...rest }, ref) => {
    return (
      <SwitchRoot
        ref={ref}
        className={clsx(s.wrap, className, 'focus-primary')}
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        {...rest}
      >
        <SwitchThumb className={s.thumb} />
      </SwitchRoot>
    );
  },
);

Switcher.displayName = 'Switcher';

export default memo(Switcher);
