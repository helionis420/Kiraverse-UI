import { memo } from 'react';
import clsx from 'clsx';
import type { IconLineYProps } from './types';
import s from './IconLineY.module.css';

const IconLineY: React.FC<IconLineYProps> = ({ className, side = 'left' }) => {
  return (
    <span className={clsx(s.wrap, s[side], className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 79 22"
        fill="none"
      >
        <g clipPath="url(#banner-title-decor-line-y-0)">
          <path
            fill="currentColor"
            d="m5.25-13.558-.002 41.703h.749l.002-41.703h-.748Z"
            opacity=".6"
          />
        </g>
        <defs>
          <clipPath id="banner-title-decor-line-y-0">
            <path fill="#fff" d="M0 0h79v22H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default memo(IconLineY);
