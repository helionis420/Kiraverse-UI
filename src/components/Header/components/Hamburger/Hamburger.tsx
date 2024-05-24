import { memo } from 'react';
import clsx from 'clsx';
import type { HamburgerProps } from './types';
import s from './Hamburger.module.css';

const Hamburger: React.FC<HamburgerProps> = ({ className, active, onToggler }) => {
  return (
    <button
      type="button"
      onClick={onToggler}
      className={clsx(s.wrap, active && s.active, 'focus-primary', className)}
    >
      <span className={s.box}>
        <span className={s.inner} />
      </span>
    </button>
  );
};

export default memo(Hamburger);
