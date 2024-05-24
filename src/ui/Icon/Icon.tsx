import { memo, forwardRef } from 'react';
import clsx from 'clsx';
import type { IconProps } from './types';
import s from './Icon.module.css';
import { ICON_SIZES } from './constants';

const Icon = forwardRef<SVGSVGElement, IconProps>(({ id, size, className }, ref) => {
  const defaultIconSize = id.split('_')[1];
  const iconSize = size || ICON_SIZES[defaultIconSize as keyof typeof ICON_SIZES];

  return (
    <svg className={clsx(s.icon, s[iconSize], className)} ref={ref}>
      <use href={`/images/sprite.svg#${id}`} />
    </svg>
  );
});

Icon.displayName = 'Icon';

export default memo(Icon);
