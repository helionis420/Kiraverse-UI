import { memo } from 'react';
import clsx from 'clsx';
import type { ContainerProps } from './types';
import s from './Container.module.css';

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size = 'md',
  withPaddingsSmX = false,
}) => {
  return (
    <div className={clsx(s.wrap, s[size], withPaddingsSmX && s['paddings-sm-x'], className)}>
      {children}
    </div>
  );
};

export default memo(Container);
