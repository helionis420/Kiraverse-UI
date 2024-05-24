import { memo } from 'react';
import clsx from 'clsx';
import type { TypographyProps } from './types';
import s from './Typography.module.css';

const Typography: React.FC<TypographyProps> = ({
  children,
  component = 'span',
  variant = 'body-large',
  className,
}) => {
  const Component = component as keyof JSX.IntrinsicElements;

  return <Component className={clsx(s.wrap, s[variant], className)}>{children}</Component>;
};

export default memo(Typography);
