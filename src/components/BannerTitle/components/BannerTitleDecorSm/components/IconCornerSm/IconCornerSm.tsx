import { memo } from 'react';
import clsx from 'clsx';
import type { IconCornerSmProps } from './types';
import s from './IconCornerSm.module.css';

const IconCornerSm: React.FC<IconCornerSmProps> = ({ className, side = 'left-top' }) => {
  return (
    <span className={clsx(s.wrap, s[side], className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 61" fill="none">
        <g clipPath="url(#banner-title-corner-sm-0)">
          <g opacity=".6">
            <path fill="currentColor" d="M13.984 5.963V2.967l1.498 1.498-1.498 1.498Z" />
            <path stroke="currentColor" strokeWidth="2.12" d="m16.203 2.247-1.469 1.469" />
            <path fill="currentColor" d="M16.98 2.996V0l-1.497 1.498 1.497 1.498Z" />
            <path
              fill="currentColor"
              d="M40.943 0H16.977v.749h23.966V0ZM16.977 1.498V.749h.748l-.748.749Z"
            />
            <path
              fill="currentColor"
              d="M40.942 1.498v-.75h-.749l.75.75ZM40.945 0v1.498l.75-.749-.75-.749Z"
            />
            <path stroke="currentColor" strokeWidth="1.056" d="M41.321 1.124 42.54 2.34" />
            <path
              fill="currentColor"
              d="M43.191 1.967v1.498l-.749-.75.75-.748ZM36.145 2.996h4.05v.749h-4.05v-.75Z"
            />
            <path
              fill="currentColor"
              d="M40.195 2.996v-.749l-.749.749h.75ZM36.23 4.494v-.75h.748l-.748.75Z"
            />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M1.249 16.477H.5v23.967h.749V16.477Z" />
            <path
              fill="currentColor"
              d="M1.248 17.226v-.749h.749l-.749.749ZM1.248 40.444v-.75l.749.75h-.749ZM4.241 42.69h-.749v17.95h.75V42.69Z"
            />
            <path
              fill="currentColor"
              d="M3.491 43.44v-.75h-.749l.75.75ZM4.24 60.657v-.749l.75.75h-.75ZM3.498 16.448H.502L2 14.95l1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="M4.219 14.23 2.75 15.7" />
            <path
              fill="currentColor"
              d="M6.494 13.481H3.498l1.498 1.498 1.498-1.498ZM2 40.444H.502l.749.749.749-.75Z"
            />
            <path stroke="currentColor" strokeWidth="1.056" d="m1.626 40.818 1.218 1.218" />
            <path fill="currentColor" d="M4.244 42.41H2.746l.749-.748.749.748Z" />
          </g>
          <path fill="currentColor" d="M10.236 11.456H5.742L7.99 9.21l2.247 2.247Z" />
          <path stroke="currentColor" strokeWidth="3.176" d="m10.837 8.613-1.72 1.72" />
          <path fill="currentColor" d="M11.736 9.736V5.243L9.49 7.49l2.247 2.246Z" />
          <mask
            id="banner-title-corner-sm-1"
            width="28"
            height="56"
            x="6"
            y="5"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M33.5 5.992H6.493V61h27.009V5.992Z" />
          </mask>
          <g mask="url(#banner-title-corner-sm-1)" opacity=".2">
            <path
              fill="currentColor"
              d="M11.732 17.226h-1.498v34.452h1.498V17.226ZM11.732 18.724v-1.498h1.498l-1.498 1.498ZM10.234 51.193v-1.498l-1.498 1.498h1.498ZM52.179 9.736H17.727v1.498h34.452V9.736ZM17.727 12.732v-1.498h1.497l-1.497 1.498ZM13.232 17.201h-2.996l1.498-1.498 1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m16.953 11.983-4.469 4.469" />
            <path
              fill="currentColor"
              d="M17.727 12.732V9.736l-1.498 1.498 1.498 1.498ZM9.49 53.645H6.494l1.498-1.498 1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m9.21 52.427-.468.469" />
            <path
              fill="currentColor"
              d="M11.736 51.678H8.74l1.498 1.498 1.498-1.498ZM7.241 53.925h-.749v5.218h.75v-5.218Z"
            />
            <path
              fill="currentColor"
              d="M7.24 54.674v-.749h.75l-.75.749ZM31.64 6.74v-.748l.75.749h-.75ZM7.241 59.892v-.75h-.749l.75.75Z"
            />
          </g>
          <path fill="currentColor" d="M5.742 19.473v1.498l.75-.75-.75-.748Z" />
          <path stroke="currentColor" strokeWidth="1.056" d="m6.118 20.596.218.218" />
          <path fill="currentColor" d="M7.24 20.44v1.497l-.749-.748.75-.75Z" />
          <g opacity=".8">
            <path fill="currentColor" d="M5.742 23.967v1.498l.75-.75-.75-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m6.118 25.09.218.218" />
            <path fill="currentColor" d="M7.24 24.933v1.498l-.749-.749.75-.749Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M5.742 28.46v1.498l.75-.749-.75-.749Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m6.118 29.584.218.218" />
            <path fill="currentColor" d="M7.24 29.427v1.498l-.749-.749.75-.749Z" />
          </g>
          <g opacity=".4">
            <path fill="currentColor" d="M5.742 32.954v1.498l.75-.749-.75-.749Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m6.118 34.078.218.217" />
            <path fill="currentColor" d="M7.24 33.92v1.499l-.749-.75.75-.748Z" />
          </g>
          <g opacity=".2">
            <path fill="currentColor" d="M5.742 37.448v1.498l.75-.75-.75-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m6.118 38.571.218.218" />
            <path fill="currentColor" d="M7.24 38.415v1.498l-.749-.75.75-.748Z" />
          </g>
          <path fill="currentColor" d="M21.469 5.243H19.97l.749.749.749-.75Z" />
          <path stroke="currentColor" strokeWidth="1.056" d="m21.095 5.617.218.218" />
          <path fill="currentColor" d="M22.965 6.21h-1.498l.749-.75.749.75Z" />
          <g opacity=".8">
            <path fill="currentColor" d="M25.963 5.243h-1.498l.749.749.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m25.589 5.617.218.218" />
            <path fill="currentColor" d="M27.459 6.21H25.96l.749-.75.749.75Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M30.457 5.243h-1.498l.749.749.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m30.083 5.617.218.218" />
            <path fill="currentColor" d="M31.953 6.21h-1.498l.749-.75.749.75Z" />
          </g>
          <g opacity=".4">
            <path fill="currentColor" d="M34.95 5.243H33.45l.75.749.748-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m34.575 5.617.218.218" />
            <path fill="currentColor" d="M36.445 6.21h-1.498l.75-.75.748.75Z" />
          </g>
          <g opacity=".2">
            <path fill="currentColor" d="M39.443 5.243h-1.498l.75.749.748-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m39.07 5.617.217.218" />
            <path fill="currentColor" d="M40.94 6.21H39.44l.75-.75.748.75Z" />
          </g>
        </g>
        <defs>
          <clipPath id="banner-title-corner-sm-0">
            <path fill="#fff" d="M0 0h44v61H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default memo(IconCornerSm);
