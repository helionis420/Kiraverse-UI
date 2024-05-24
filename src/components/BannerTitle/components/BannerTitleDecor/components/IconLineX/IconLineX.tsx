import { memo } from 'react';
import clsx from 'clsx';
import type { IconLineXProps } from './types';
import s from './IconLineX.module.css';

const IconLineX: React.FC<IconLineXProps> = ({ className, side = 'top' }) => {
  return (
    <span className={clsx(s.wrap, s[side], className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 845 14"
        fill="none"
      >
        <g clipPath="url(#banner-title-decor-line-x-0)">
          <g opacity=".6">
            <path fill="currentColor" d="M73.602 2.996v1.498l.749-.75-.749-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m73.977 4.12.217.217" />
            <path
              fill="currentColor"
              d="M75.1 3.963V5.46l-.749-.749.749-.748ZM837.803 5.243H75.1v.749h762.703v-.75Z"
            />
            <path
              fill="currentColor"
              d="M75.1 5.243v-.75l.749.75H75.1ZM838.066 5.243v-.75l-.749.75h.749ZM838.104 5.46V3.963l.749.748-.749.75Z"
            />
            <path stroke="currentColor" strokeWidth="1.056" d="m838.697 4.12-.218.217" />
            <path fill="currentColor" d="M839.603 4.494V2.996l-.749.749.749.749Z" />
          </g>
        </g>
        <defs>
          <clipPath id="banner-title-decor-line-x-0">
            <path fill="#fff" d="M0 0h845v14H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default memo(IconLineX);
