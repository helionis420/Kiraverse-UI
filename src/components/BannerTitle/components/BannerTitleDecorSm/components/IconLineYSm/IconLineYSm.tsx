import { memo } from 'react';
import clsx from 'clsx';
import type { IconLineYSmProps } from './types';
import s from './IconLineYSm.module.css';

const IconLineY: React.FC<IconLineYSmProps> = ({ className, side = 'left' }) => {
  return (
    <span className={clsx(s.wrap, s[side], className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 7 87"
        fill="none"
      >
        <g clipPath="url(#banner-title-decor-line-y-sm-0)">
          <mask
            id="banner-title-decor-line-x-sm-1"
            width="7"
            height="140"
            x="0"
            y="-23"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M0-23h7v140H0V-23Z" />
          </mask>
          <g mask="url(#banner-title-decor-line-y-sm-1)">
            <path
              fill="currentColor"
              d="m3.557 1-.002 85.129h.749l.002-85.128L3.557 1Zm-.003 85.129h-.75l.75-.749v.749Zm.002-84.967h-.75l.75.75v-.75Z"
              opacity=".6"
            />
          </g>
        </g>
        <defs>
          <clipPath id="banner-title-decor-line-y-sm-0">
            <path fill="#fff" d="M0 0h7v87H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default memo(IconLineY);
