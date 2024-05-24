import { memo } from 'react';
import clsx from 'clsx';
import { ButtonInnerProps } from './types';
import s from './ButtonInnerSecondary.module.css';

const ButtonInnerSecondary: React.FC<ButtonInnerProps> = ({
  className,
  hoverClassName,
  activeClassName,
  focusClassName,
  disabledClassName,
  size = 'md',
  responsive = false,
}) => {
  return (
    <>
      <span className={clsx(s.inner, s[size], responsive && s.responsive, className)}>
        <svg className={s['inner-start']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 66">
          <g clipPath="url(#btn-secondary-start-0)">
            <mask
              id="btn-secondary-start-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-start-1)">
              <path fill="#A261F5" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#A261F5"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#A261F5"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#A261F5"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#A261F5"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="#221039"
                d="M1 17 13.5 4H62l2 2v18H5l-4-4v-3ZM64 24H7v18h57V24ZM1 49l12.5 13H62l2-2V42H5l-4 4v3ZM180 6H64v54h116V6Z"
              />
            </g>
          </g>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          width="109"
          height="66"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-center-0)">
            <mask
              id="btn-secondary-center-1"
              width="176"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M109 0H-67v66h176V0Z" />
            </mask>
            <g mask="url(#btn-secondary-center-1)">
              <mask
                id="btn-secondary-center-2"
                width="243"
                height="66"
                x="-67"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: 'luminance' }}
              >
                <path fill="#fff" d="M176 0H-67v66h243V0Z" />
              </mask>
              <g mask="url(#btn-secondary-center-2)">
                <path fill="#A261F5" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
                <path fill="#221039" d="M113 6H-3v54h116V6Z" />
              </g>
            </g>
          </g>
        </svg>
        <span />
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-end-0)">
            <mask
              id="btn-secondary-end-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-secondary-end-1)">
              <path fill="#A261F5" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#A261F5"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#A261F5"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#A261F5"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#A261F5"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#A261F5"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="#221039"
                d="M67 17 54.5 4H6L4 6v18h59l4-4v-3ZM60 24H4v18h56V24ZM67 49 54.5 62H6l-2-2V42h59l4 4v3ZM4 6h-116v54H4V6Z"
              />
            </g>
          </g>
        </svg>
      </span>
      <span
        className={clsx(s.inner, s[size], responsive && s.responsive, focusClassName, className)}
      >
        <svg
          className={s['inner-start']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-start-focus-0)">
            <mask
              id="btn-secondary-start-focus-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-start-focus-1)">
              <path fill="#D1BCFF" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#D1BCFF"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#D1BCFF"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#D1BCFF"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#D1BCFF"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#D1BCFF"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="#221039"
                d="M1 17 13.5 4H62l2 2v18H5l-4-4v-3ZM64 24H7v18h57V24ZM1 49l12.5 13H62l2-2V42H5l-4 4v3ZM180 6H64v54h116V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-start-focus-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-center-focus-0)">
            <mask
              id="btn-secondary-center-focus-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-center-focus-1)">
              <path fill="#D1BCFF" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path fill="#221039" d="M113 6H-3v54h116V6Z" />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-center-focus-0">
              <path fill="#fff" d="M0 0h109v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-end-focus-0)">
            <mask
              id="btn-secondary-end-focus-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-secondary-end-focus-1)">
              <path fill="#D1BCFF" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#D1BCFF"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#D1BCFF"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#D1BCFF"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#D1BCFF" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#D1BCFF"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#D1BCFF"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#D1BCFF"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="#221039"
                d="M67 17 54.5 4H6L4 6v18h59l4-4v-3ZM60 24H4v18h56V24ZM67 49 54.5 62H6l-2-2V42h59l4 4v3ZM4 6h-116v54H4V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-end-focus-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span
        className={clsx(s.inner, s[size], responsive && s.responsive, hoverClassName, className)}
      >
        <svg
          className={s['inner-start']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-start-hover-0)">
            <mask
              id="btn-secondary-start-hover-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-start-hover-1)">
              <path fill="#A261F5" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#A261F5"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#A261F5"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#A261F5"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#A261F5"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="#2F164F"
                d="M1 17 13.5 4H62l2 2v18H5l-4-4v-3ZM64 24H7v18h57V24ZM1 49l12.5 13H62l2-2V42H5l-4 4v3ZM180 6H64v54h116V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-start-hover-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-center-hover-0)">
            <mask
              id="btn-secondary-center-hover-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-center-hover-1)">
              <path fill="#A261F5" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path fill="#2F164F" d="M113 6H-3v54h116V6Z" />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-center-hover-0">
              <path fill="#fff" d="M0 0h109v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-end-hover-0)">
            <mask
              id="btn-secondary-end-hover-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-secondary-end-hover-1)">
              <path fill="#A261F5" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#A261F5"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#A261F5"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#A261F5"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#A261F5"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#A261F5"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="#2F164F"
                d="M67 17 54.5 4H6L4 6v18h59l4-4v-3ZM60 24H4v18h56V24ZM67 49 54.5 62H6l-2-2V42h59l4 4v3ZM4 6h-116v54H4V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-end-hover-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span
        className={clsx(s.inner, s[size], responsive && s.responsive, activeClassName, className)}
      >
        <svg
          className={s['inner-start']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-start-active-0)">
            <mask
              id="btn-secondary-start-active-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-start-active-1)">
              <path fill="#A261F5" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#A261F5"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#A261F5"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#A261F5"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#A261F5"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="#3C1C64"
                d="M1 17 13.5 4H62l2 2v18H5l-4-4v-3ZM64 24H7v18h57V24ZM1 49l12.5 13H62l2-2V42H5l-4 4v3ZM180 6H64v54h116V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-start-active-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-center-active-0)">
            <mask
              id="btn-secondary-center-active-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-center-active-1)">
              <path fill="#A261F5" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path fill="#3C1C64" d="M113 6H-3v54h116V6Z" />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-center-active-0">
              <path fill="#fff" d="M0 0h109v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-end-active-0)">
            <mask
              id="btn-secondary-end-active-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-secondary-end-active-1)">
              <path fill="#A261F5" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#A261F5"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#A261F5"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#A261F5"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#A261F5"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#A261F5"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="#3C1C64"
                d="M67 17 54.5 4H6L4 6v18h59l4-4v-3ZM60 24H4v18h56V24ZM67 49 54.5 62H6l-2-2V42h59l4 4v3ZM4 6h-116v54H4V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-end-active-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span
        className={clsx(s.inner, s[size], responsive && s.responsive, disabledClassName, className)}
      >
        <svg
          className={s['inner-start']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-start-disabled-0)">
            <mask
              id="btn-secondary-start-disabled-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-start-disabled-1)">
              <path fill="#A261F5" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#A261F5"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#A261F5"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#A261F5"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#A261F5"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="#231138"
                fillOpacity=".48"
                d="M1 17 13.5 4H62l2 2v18H5l-4-4v-3ZM64 24H7v18h57V24ZM1 49l12.5 13H62l2-2V42H5l-4 4v3ZM180 6H64v54h116V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-start-disabled-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-center-disabled-0)">
            <mask
              id="btn-secondary-center-disabled-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-secondary-center-disabled-1)">
              <path fill="#A261F5" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path fill="#231138" fillOpacity=".48" d="M113 6H-3v54h116V6Z" />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-center-disabled-0">
              <path fill="#fff" d="M0 0h109v66H0z" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-secondary-end-disabled-0)">
            <mask
              id="btn-secondary-end-disabled-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-secondary-end-disabled-1)">
              <path fill="#A261F5" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#A261F5"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#A261F5"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#A261F5"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#A261F5" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#A261F5"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#A261F5"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#A261F5"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="#231138"
                fillOpacity=".48"
                d="M67 17 54.5 4H6L4 6v18h59l4-4v-3ZM60 24H4v18h56V24ZM67 49 54.5 62H6l-2-2V42h59l4 4v3ZM4 6h-116v54H4V6Z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="btn-secondary-end-disabled-0">
              <path fill="#fff" d="M0 0h67v66H0z" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </>
  );
};

export default memo(ButtonInnerSecondary);
