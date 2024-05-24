import { memo } from 'react';
import clsx from 'clsx';
import type { IconCornerProps } from './types';
import s from './IconCorner.module.css';

const IconCorner: React.FC<IconCornerProps> = ({
  className,
  side = 'left-top',
  responsive = false,
}) => {
  return (
    <span className={clsx(s.wrap, s[side], responsive && s.responsive, className)}>
      <svg
        className={s.desktop}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 111"
        fill="none"
      >
        <path fill="currentColor" d="M5.992 17.963H0l2.996-2.996 2.996 2.996Z" />
        <path stroke="currentColor" strokeWidth="4.239" d="m16.466 4.494-11.97 11.97" />
        <path fill="currentColor" d="M17.976 5.992V0L14.98 2.996l2.996 2.996Z" />
        <path
          fill="currentColor"
          d="M17.975 0h22.469v2.996H17.975zM17.975 5.992V2.996h2.995l-2.995 2.996ZM0 40.444h1.498v23.967H0zM1.498 41.942v-1.498h1.498l-1.498 1.498ZM1.498 64.41v-1.497l1.498 1.497H1.498Z"
        />
        <path
          fill="currentColor"
          d="M40.443 0h22.469v1.498H40.443zM40.443 2.996V1.498h1.498l-1.498 1.498ZM62.41 2.996V1.498h-1.498l1.498 1.498ZM0 17.975h2.996v22.469H0zM2.996 20.97v-2.995h2.996l-2.996 2.996ZM62.912 0v2.996l1.498-1.498L62.912 0Z"
        />
        <path stroke="currentColor" strokeWidth="2.12" d="m63.661 2.247 1.469 1.469" />
        <path
          fill="currentColor"
          d="M65.907 2.967v2.996L64.41 4.465l1.498-1.498ZM2.996 64.41H0l1.498 1.498 1.498-1.498Z"
        />
        <path stroke="currentColor" strokeWidth="2.12" d="m2.247 65.16 7.469 7.468" />
        <path
          fill="currentColor"
          d="M11.982 73.377H8.986l1.498-1.498 1.498 1.498ZM10.485 73.398h1.498v35.201h-1.498zM10.485 74.896v-1.498H8.987l1.498 1.498ZM11.983 110.405v-1.806h-1.498l1.498 1.806ZM84.633 1.498v1.498l.749-.75-.75-.748Z"
        />
        <path stroke="currentColor" strokeWidth="1.056" d="m85.008 2.621 3.218 3.218" />
        <path fill="currentColor" d="M88.378 5.465v1.498l-.749-.75.749-.748Z" />
        <path fill="currentColor" d="M88.377 5.243v4.493l2.247-2.247-2.247-2.246Z" />
        <path stroke="currentColor" strokeWidth="3.176" d="m89.5 8.613 6.72 6.72" />
        <path
          fill="currentColor"
          d="M97.364 14.21v4.493l-2.247-2.247 2.247-2.247ZM68.904 1.498h15.728v.749H68.904z"
        />
        <path
          fill="currentColor"
          d="M84.871 2.996v-.75h-.749l.749.75ZM68.904 2.247v-.75h-.749l.75.75ZM65.908 4.494h17.226v1.498H65.908zM65.908 4.494V2.996l1.498 1.498h-1.498Z"
        />
        <path fill="currentColor" d="M83.133 5.992V4.494l1.498 1.498h-1.498Z" />
        <g fill="currentColor" opacity=".4">
          <path d="M2.996 77.891v-2.996l2.996 2.996H2.996ZM2.996 77.891h2.996v24.87H2.996zM5.992 105.757v-2.996H2.996l2.996 2.996Z" />
        </g>
      </svg>
      <svg className={s.mob} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 85" fill="none">
        <path fill="currentColor" d="M5 13.775H.438l2.282-2.282L5 13.775Z" />
        <path stroke="currentColor" strokeWidth="3.229" d="M12.834 3.66 3.86 12.634" />
        <path
          fill="currentColor"
          d="M14.128 4.8V.238l-2.282 2.282L14.128 4.8ZM14.133.237h17.115v2.282H14.133zM14.133 4.8V2.52h2.282L14.133 4.8ZM.438 31.044h1.141v7.143H.438zM1.579 32.185v-1.14h1.14l-1.14 1.14ZM1.579 38.3v-1.14l1.14 1.14H1.58ZM31.25.237h17.115v1.141H31.25z"
        />
        <path
          fill="currentColor"
          d="M31.25 2.519V1.378h1.141l-1.141 1.14ZM48.506 2.519V1.378h-1.141l1.141 1.14ZM.438 13.929H2.72v6.697H.438zM2.72 16.211V13.93H5L2.72 16.211Z"
        />
        <path fill="currentColor" d="M48.36.237v2.282l1.14-1.141L48.36.237Z" />
        <path stroke="currentColor" strokeWidth="1.615" d="m48.93 1.948 1.115 1.115" />
        <path
          fill="currentColor"
          d="M50.641 2.493v2.282l-1.14-1.141 1.14-1.141ZM2.719 49.3H.437l1.141 1.141 1.141-1.14Z"
        />
        <path stroke="currentColor" strokeWidth="1.615" d="m2.149 49.87 6.115 6.116" />
        <path fill="currentColor" d="M9.565 56.557H7.283l1.14-1.141 1.142 1.14Z" />
        <path
          fill="currentColor"
          d="M8.422 56.147h1.141v26.814H8.422zM8.422 57.288v-1.141H7.28l1.14 1.14Z"
        />
        <path
          fill="currentColor"
          d="M9.563 84.336V82.96H8.422l1.14 1.376ZM64.906 1.378v1.14l.57-.57-.57-.57Z"
        />
        <path stroke="currentColor" strokeWidth=".804" d="m65.192 2.233 2.686 2.686" />
        <path
          fill="currentColor"
          d="M67.758 4.634v1.14l-.57-.57.57-.57ZM67.758 4.23v3.423l1.711-1.711-1.711-1.712Z"
        />
        <path stroke="currentColor" strokeWidth="2.419" d="m68.614 6.798 5.545 5.544" />
        <path
          fill="currentColor"
          d="M74.603 11.487v3.423l-1.711-1.712 1.712-1.711ZM52.984 1.378h11.981v.57H52.984zM65.24 2.519v-.57h-.57l.57.57ZM52.922 1.948v-.57h-.57l.57.57ZM50.703 3.666h13.122v1.141H50.703zM50.703 3.666V2.525l1.141 1.14h-1.14Z"
        />
        <path fill="currentColor" d="M63.758 4.801v-1.14l1.14 1.14h-1.14Z" />
        <g fill="currentColor" opacity=".4">
          <path d="M2.719 59.57v-2.283L5 59.57H2.719Z" />
          <path d="M2.719 59.569h2.282v18.944H2.719zM5 80.795v-2.282H2.72L5 80.795Z" />
        </g>
      </svg>
    </span>
  );
};

export default memo(IconCorner);
