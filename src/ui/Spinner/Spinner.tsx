import { memo } from 'react';
import clsx from 'clsx';
import type { SpinnerProps } from './types';
import s from './Spinner.module.css';

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="22" />
        <circle cx="50" cy="50" r="22" />
      </svg>
    </div>
  );
};

export default memo(Spinner);
