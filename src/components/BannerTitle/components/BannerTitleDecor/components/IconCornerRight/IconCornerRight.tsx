import { memo } from 'react';
import clsx from 'clsx';
import type { IconCornerRightProps } from './types';
import s from './IconCornerRight.module.css';

const IconCornerLeft: React.FC<IconCornerRightProps> = ({ className, side = 'right-top' }) => {
  return (
    <span className={clsx(s.wrap, s[side], className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 79" fill="none">
        <g clipPath="url(#banner-title-corner-right-0)">
          <g opacity=".6">
            <path fill="currentColor" d="M65.8 5.963V2.967l-1.498 1.498L65.8 5.963Z" />
            <path stroke="currentColor" strokeWidth="2.12" d="m63.581 2.247 1.469 1.469" />
            <path
              fill="currentColor"
              d="M62.804 2.996V0l1.498 1.498-1.498 1.498ZM38.837 0h23.967v.749H38.837V0ZM62.804 1.498V.749h-.749l.749.749Z"
            />
            <path
              fill="currentColor"
              d="M38.837 1.498v-.75h.749l-.749.75ZM38.837 0v1.498l-.749-.75.749-.748Z"
            />
            <path stroke="currentColor" strokeWidth="1.056" d="m38.462 1.123-1.218 1.218" />
            <path fill="currentColor" d="M36.59 1.967v1.497l.749-.748-.749-.75Z" />
            <path fill="currentColor" d="M.641 2.996h35.95v.749H.641v-.75Z" />
            <path
              fill="currentColor"
              d="M36.591 2.996v-.75l-.749.75h.749ZM.624 4.494v-.75h.749l-.749.75Z"
            />
          </g>
          <g opacity=".6">
            <path
              fill="currentColor"
              d="M78.532 16.477h.749v23.967h-.749V16.477ZM78.532 17.226v-.749h-.749l.749.749ZM78.532 40.444v-.75l-.749.75h.749ZM75.536 42.69h.749v35.95h-.749V42.69ZM76.285 43.44v-.75h.749l-.749.75ZM75.536 78.657v-.749l-.749.75h.749ZM76.285 16.448h2.996l-1.498-1.498-1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m75.564 14.23 1.469 1.469" />
            <path
              fill="currentColor"
              d="M73.289 13.481h2.996l-1.498 1.498-1.498-1.498ZM77.783 40.444h1.498l-.749.749-.749-.75Z"
            />
            <path stroke="currentColor" strokeWidth="1.056" d="m78.157 40.818-1.218 1.218" />
            <path fill="currentColor" d="M75.536 42.41h1.498l-.749-.749-.749.75Z" />
          </g>
          <path fill="currentColor" d="M69.545 11.456h4.494L71.792 9.21l-2.247 2.247Z" />
          <path stroke="currentColor" strokeWidth="3.176" d="m68.948 8.613 1.72 1.72" />
          <path fill="currentColor" d="M68.047 9.737V5.243l2.247 2.247-2.247 2.247Z" />
          <mask
            id="banner-title-corner-right-1"
            width="74"
            height="74"
            x="0"
            y="5"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'luminance' }}
          >
            <path fill="#fff" d="M.282 5.992H73.29V79H.282V5.992Z" />
          </mask>
          <g mask="url(#banner-title-corner-right-1)" opacity=".2">
            <path
              fill="currentColor"
              d="M68.047 17.226h1.498v34.452h-1.498V17.226ZM68.047 18.724v-1.498h-1.498l1.498 1.498ZM69.545 51.193v-1.498l1.498 1.498h-1.498ZM27.604 9.736h34.452v1.498H27.604V9.736ZM62.056 12.732v-1.498h-1.498l1.498 1.498ZM28.089 9.736V8.238l1.498 1.498h-1.498ZM2.138 5.992h23.218v.749H2.138v-.75Z"
            />
            <path
              fill="currentColor"
              d="M25.356 7.49v-.75h-.749l.749.75ZM66.549 17.201h2.996l-1.498-1.498-1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m62.828 11.983 4.469 4.469" />
            <path
              fill="currentColor"
              d="M62.056 12.732V9.736l1.498 1.498-1.498 1.498ZM27.604 10.954V7.958l-1.498 1.498 1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m26.385 8.239.469.468" />
            <path
              fill="currentColor"
              d="M25.356 8.988V5.992l1.498 1.498-1.498 1.498ZM70.294 53.645h2.996l-1.498-1.498-1.498 1.498Z"
            />
            <path stroke="currentColor" strokeWidth="2.12" d="m70.573 52.427.469.469" />
            <path
              fill="currentColor"
              d="M68.047 51.678h2.996l-1.498 1.498-1.498-1.498ZM72.541 53.925h.749v23.218h-.749V53.925ZM72.541 54.674v-.749h-.749l.749.749ZM2.138 6.74v-.748l-.749.749h.749Z"
            />
            <path fill="currentColor" d="M72.541 77.892v-.75h.749l-.749.75Z" />
          </g>
          <path fill="currentColor" d="M74.038 19.473v1.498l-.749-.75.749-.748Z" />
          <path stroke="currentColor" strokeWidth="1.056" d="m73.663 20.596-.218.218" />
          <path fill="currentColor" d="M72.54 20.44v1.497l.749-.748-.749-.75Z" />
          <g opacity=".8">
            <path fill="currentColor" d="M74.038 23.967v1.498l-.749-.75.749-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m73.663 25.09-.218.218" />
            <path fill="currentColor" d="M72.54 24.933v1.498l.749-.749-.749-.749Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M74.038 28.46v1.498l-.749-.749.749-.749Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m73.663 29.584-.218.218" />
            <path fill="currentColor" d="M72.54 29.427v1.498l.749-.749-.749-.749Z" />
          </g>
          <g opacity=".4">
            <path fill="currentColor" d="M74.038 32.954v1.498l-.749-.749.749-.749Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m73.663 34.078-.218.217" />
            <path fill="currentColor" d="M72.54 33.92v1.499l.749-.75-.749-.748Z" />
          </g>
          <g opacity=".2">
            <path fill="currentColor" d="M74.038 37.448v1.498l-.749-.75.749-.748Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m73.663 38.571-.218.218" />
            <path fill="currentColor" d="M72.54 38.415v1.498l.749-.75-.749-.748Z" />
          </g>
          <path fill="currentColor" d="M58.311 5.243h1.498l-.749.749-.749-.75Z" />
          <path stroke="currentColor" strokeWidth="1.056" d="m58.685 5.617-.218.218" />
          <path fill="currentColor" d="M56.813 6.21h1.498l-.749-.75-.749.75Z" />
          <g opacity=".8">
            <path fill="currentColor" d="M53.817 5.243h1.497l-.749.749-.748-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m54.19 5.617-.217.218" />
            <path fill="currentColor" d="M52.318 6.21h1.498l-.749-.75-.749.75Z" />
          </g>
          <g opacity=".6">
            <path fill="currentColor" d="M49.323 5.243h1.498l-.749.749-.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m49.697 5.617-.218.218" />
            <path fill="currentColor" d="M47.825 6.21h1.498l-.749-.75-.749.75Z" />
          </g>
          <g opacity=".4">
            <path fill="currentColor" d="M44.829 5.243h1.498l-.749.749-.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m45.203 5.617-.218.218" />
            <path fill="currentColor" d="M43.331 6.21h1.498l-.749-.75-.749.75Z" />
          </g>
          <g opacity=".2">
            <path fill="currentColor" d="M40.336 5.243h1.498l-.749.749-.749-.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m40.71 5.617-.218.218" />
            <path fill="currentColor" d="M38.838 6.21h1.498l-.749-.75-.749.75Z" />
          </g>
          <g opacity=".6">
            <path
              fill="currentColor"
              d="M74.041 65.442v41.703h-.749V65.442h.749ZM74.041 65.178h.749l-.749.75v-.75Z"
            />
            <path fill="currentColor" d="M73.823 65.203h1.498l-.749-.749-.749.75Z" />
            <path stroke="currentColor" strokeWidth="1.056" d="m75.165 64.61-.218.218" />
            <path fill="currentColor" d="M74.79 63.705h1.498l-.749.75-.75-.75Z" />
          </g>
        </g>
        <defs>
          <clipPath id="banner-title-corner-right-0">
            <path fill="#fff" d="M0 0h80v79H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

export default memo(IconCornerLeft);
