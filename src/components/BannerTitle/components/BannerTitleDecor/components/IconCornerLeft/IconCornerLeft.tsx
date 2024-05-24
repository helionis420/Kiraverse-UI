import { memo } from 'react';
import clsx from 'clsx';
import type { IconCornerLeftProps } from './types';
import s from './IconCornerLeft.module.css';

const IconCornerLeft: React.FC<IconCornerLeftProps> = ({ className, side = 'left-top' }) => {
  return (
    <span className={clsx(s.wrap, s[side], className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 79" fill="none">
        <g clipPath="url(#banner-title-corner-left-0)">
          <g opacity=".6">
            <path fill="currentColor" d="M13.481 5.963V2.967l1.498 1.498-1.498 1.498Z" />
            <path stroke="currentColor" strokeWidth="2.12" d="m15.7 2.247-1.469 1.469" />
            <path
              fill="currentColor"
              d="M16.477 2.996V0L14.98 1.498l1.497 1.498ZM40.444 0H16.477v.749h23.967V0ZM16.477 1.498V.749h.75l-.75.749Z"
            />
            <path fill="currentColor" d="M40.444 1.498v-.75h-.749l.75.75Z" />
            <path fill="currentColor" d="M40.444 0v1.498l.75-.75-.75-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m40.82 1.123 1.217 1.218" />
            <path fill="currentColor" d="M42.691 1.967v1.497l-.749-.748.75-.75Z" />
            <path fill="currentColor" d="M78.64 2.996H42.69v.749h35.95v-.75Z" />
            <path
              fill="currentColor"
              d="M42.69 2.996v-.75l.75.75h-.75ZM78.657 4.494v-.75h-.749l.75.75Z"
            />
          </g>
          <g opacity=".6">
            <path
              fill="currentColor"
              d="M.749 16.477H0v23.967h.749V16.477ZM.749 17.226v-.749h.749l-.749.749ZM.749 40.444v-.75l.749.75H.749ZM3.745 42.69h-.749v35.95h.749V42.69ZM2.996 43.44v-.75h-.749l.749.75ZM3.745 78.657v-.749l.75.75h-.75ZM2.996 16.448H0l1.498-1.498 1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="M3.717 14.23 2.248 15.7" />
            <path
              fill="currentColor"
              d="M5.992 13.481H2.996l1.498 1.498 1.498-1.498ZM1.498 40.444H0l.749.749.749-.75Z"
            />
            <path stroke="currentColor" strokeWidth="1.056" d="m1.124 40.818 1.218 1.218" />
            <path fill="currentColor" d="M3.745 42.41H2.247l.749-.749.749.75Z" />
          </g>
          <path fill="currentColor" d="M9.736 11.456H5.242L7.49 9.21l2.247 2.247Z" />
          <path stroke="currentColor" strokeWidth="3.176" d="m10.333 8.613-1.72 1.72" />
          <path fill="currentColor" d="M11.234 9.737V5.243L8.987 7.49l2.247 2.247Z" />
          <mask
            id="banner-title-corner-left-1"
            width="74"
            height="74"
            x="5"
            y="5"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M79 5.992H5.99V79H79V5.992Z" />
          </mask>
          <g mask="url(#banner-title-corner-left-1)" opacity=".2">
            <path
              fill="currentColor"
              d="M11.234 17.226H9.736v34.452h1.498V17.226ZM11.234 18.724v-1.498h1.498l-1.498 1.498ZM9.736 51.193v-1.498l-1.498 1.498h1.498ZM51.678 9.736H17.226v1.498h34.452V9.736ZM17.226 12.732v-1.498h1.498l-1.498 1.498ZM51.192 9.736V8.238l-1.498 1.498h1.498ZM77.142 5.992H53.925v.749h23.218v-.75Z"
            />
            <path
              fill="currentColor"
              d="M53.925 7.49v-.75h.749l-.75.75ZM12.732 17.201H9.736l1.498-1.498 1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m16.453 11.983-4.469 4.469" />
            <path
              fill="currentColor"
              d="M17.226 12.732V9.736l-1.498 1.498 1.498 1.498ZM51.678 10.954V7.958l1.498 1.498-1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m52.897 8.239-.47.468" />
            <path
              fill="currentColor"
              d="M53.925 8.988V5.992L52.427 7.49l1.498 1.498ZM8.987 53.645H5.991l1.498-1.498 1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m8.708 52.427-.469.469" />
            <path
              fill="currentColor"
              d="M11.234 51.678H8.238l1.498 1.498 1.498-1.498ZM6.74 53.925h-.749v23.218h.75V53.925Z"
            />
            <path
              fill="currentColor"
              d="M6.74 54.674v-.749h.75l-.75.749ZM77.144 6.74v-.748l.748.749h-.748ZM6.74 77.892v-.75h-.749l.75.75Z"
            />
          </g>
          <path fill="currentColor" d="M5.243 19.473v1.498l.75-.75-.75-.748Z" />
          <path stroke="currentColor" strokeWidth="1.056" d="m5.618 20.596.218.218" />
          <path fill="currentColor" d="M6.741 20.44v1.497l-.749-.748.75-.75Z" />
          <g opacity=".8">
            <path fill="currentColor" d="M5.243 23.967v1.498l.75-.75-.75-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m5.618 25.09.218.218" />
            <path fill="currentColor" d="M6.741 24.933v1.498l-.749-.749.75-.749Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M5.243 28.46v1.498l.75-.749-.75-.749Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m5.618 29.584.218.218" />
            <path fill="currentColor" d="M6.741 29.427v1.498l-.749-.749.75-.749Z" />
          </g>
          <g opacity=".4">
            <path fill="currentColor" d="M5.243 32.954v1.498l.75-.749-.75-.749Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m5.618 34.078.218.217" />
            <path fill="currentColor" d="M6.741 33.92v1.499l-.749-.75.75-.748Z" />
          </g>
          <g opacity=".2">
            <path fill="currentColor" d="M5.243 37.448v1.498l.75-.75-.75-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m5.618 38.571.218.218" />
            <path fill="currentColor" d="M6.741 38.415v1.498l-.749-.75.75-.748Z" />
          </g>
          <path fill="currentColor" d="M20.97 5.243h-1.497l.749.749.749-.75Z" />
          <path stroke="currentColor" strokeWidth="1.056" d="m20.597 5.617.217.218" />
          <path fill="currentColor" d="M22.469 6.21H20.97l.749-.75.749.75Z" />
          <g opacity=".8">
            <path fill="currentColor" d="M25.465 5.243h-1.498l.749.749.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m25.09 5.617.219.218" />
            <path fill="currentColor" d="M26.963 6.21h-1.498l.749-.75.749.75Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M29.958 5.243H28.46l.749.749.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m29.584 5.617.218.218" />
            <path fill="currentColor" d="M31.456 6.21h-1.498l.749-.75.749.75Z" />
          </g>
          <g opacity=".4">
            <path fill="currentColor" d="M34.452 5.243h-1.498l.75.749.748-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m34.078 5.617.218.218" />
            <path fill="currentColor" d="M35.95 6.21h-1.498l.75-.75.748.75Z" />
          </g>
          <g opacity=".2">
            <path fill="currentColor" d="M38.945 5.243h-1.498l.75.749.748-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m38.571 5.617.218.218" />
            <path fill="currentColor" d="M40.443 6.21h-1.498l.75-.75.748.75Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="m5.25 65.442-.002 41.703h.749l.002-41.703h-.748Z" />
            <path fill="currentColor" d="M5.25 65.178h-.748l.749.75v-.75Z" />
            <path fill="currentColor" d="M5.469 65.203H3.97l.749-.749.749.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m4.127 64.61.218.218" />
            <path fill="currentColor" d="M4.502 63.705H3.004l.749.75.749-.75Z" />
          </g>
        </g>
        <defs>
          <clipPath id="banner-title-corner-left-0">
            <path fill="#fff" d="M0 0h79v79H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default memo(IconCornerLeft);
