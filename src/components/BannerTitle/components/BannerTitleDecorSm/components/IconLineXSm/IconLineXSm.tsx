import { memo } from 'react';
import clsx from 'clsx';
import type { IconLineXSmProps } from './types';
import s from './IconLineXSm.module.css';

const IconLineXSm: React.FC<IconLineXSmProps> = ({ className, side = 'top' }) => {
  return (
    <span className={clsx(s.wrap, className)}>
      {side === 'top' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 241 10"
          fill="none"
        >
          <g clipPath="url(#banner-title-decor-line-x-sm-top-0)">
            <mask
              id="banner-title-decor-line-x-sm-top-1"
              width="301"
              height="10"
              x="-21"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M280 0H-21v10h301V0Z" />
            </mask>
            <g fill="currentColor" mask="url(#banner-title-decor-line-x-sm-top-1)" opacity=".6">
              <path d="M240.647 4.613h-240v.75h240v-.75Z" />
              <path d="M.646 4.613v-.749l.75.75h-.75ZM240.614 4.613v-.749l-.749.75h.749Z" />
            </g>
          </g>
          <defs>
            <clipPath id="banner-title-decor-line-x-sm-top-0">
              <path fill="#fff" d="M0 0h241v10H0z" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 260 10"
          fill="none"
        >
          <g clipPath="url(#banner-title-decor-line-x-sm-bottom-0)">
            <mask
              id="banner-title-decor-line-x-sm-bottom-1"
              width="301"
              height="10"
              x="-10"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M291 0H-10v10h301V0Z" />
            </mask>
            <g fill="currentColor" mask="url(#banner-title-decor-line-x-sm-bottom-1)" opacity=".6">
              <path d="M258.967 5.581h-258v-.749h258v.749ZM.967 5.581v.749l.749-.749h-.75ZM258.935 5.581v.749l-.749-.749h.749Z" />
            </g>
          </g>
          <defs>
            <clipPath id="banner-title-decor-line-x-sm-bottom-0">
              <path fill="#fff" d="M0 0h260v10H0z" />
            </clipPath>
          </defs>
        </svg>
      )}
    </span>
  );
};

export default memo(IconLineXSm);
