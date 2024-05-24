import { memo } from 'react';
import clsx from 'clsx';
import { ButtonInnerProps } from './types';
import s from './ButtonInnerPrimary.module.css';

const ButtonInnerPrimary: React.FC<ButtonInnerProps> = ({
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
          <g clipPath="url(#btn-primary-start-0)">
            <mask
              id="btn-primary-start-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-start-1)">
              <path fill="#00E5FF" stroke="none" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#00E5FF"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#00E5FF"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#00E5FF"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#00E5FF"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="url(#btn-primary-start-2)"
                fillRule="evenodd"
                d="M1 17 13.5 4H62l2 2h116l2-2h48.5L243 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H182l-2-2H64l-2 2H13.5L1 49v-3l4-4h2V24H5l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-start-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 83.105 238.902) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42D8F5" />
              <stop offset="1" stopColor="#17A1EF" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-inner-0)">
            <mask
              id="btn-primary-inner-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-inner-1)">
              <path fill="#00E5FF" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path
                fill="url(#btn-primary-inner-2)"
                fillRule="evenodd"
                d="m-66 17 12.5-13H-5l2 2h116l2-2h48.5L176 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H115l-2-2H-3l-2 2h-48.5L-66 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-inner-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 49.605 78.58) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42D8F5" />
              <stop offset="1" stopColor="#17A1EF" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-end-0)">
            <mask
              id="btn-primary-end-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-primary-end-1)">
              <path fill="#00E5FF" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#00E5FF"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#00E5FF"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#00E5FF"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#00E5FF"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="url(#btn-primary-end-2)"
                fillRule="evenodd"
                d="m-175 17 12.5-13h48.5l2 2H4l2-2h48.5L67 17v3l-4 4h-3v18h3l4 4v3L54.5 62H6l-2-2h-116l-2 2h-48.5L-175 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-end-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 -4.895 -182.242) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42D8F5" />
              <stop offset="1" stopColor="#17A1EF" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-shadow']}
          preserveAspectRatio="none"
          viewBox="0 0 243 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="btn-primary-filter"
              x="-19"
              y="-12"
              width="200%"
              height="200%"
              preserveAspectRatio="none"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.23 0 0 0 0 0.541267 0 0 0 0 0.766667 0 0 0 0.44 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4404_14474"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4404_14474"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.920833 0 0 0 0 0.92875 0 0 0 0 1 0 0 0 0.47 0"
              />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4404_14474" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.295833 0 0 0 0 0.662 0 0 0 0 1 0 0 0 0.51 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_4404_14474"
                result="effect3_innerShadow_4404_14474"
              />
            </filter>
          </defs>
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
          <g clipPath="url(#btn-primary-start-focus-0)">
            <mask
              id="btn-primary-start-focus-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-start-focus-1)">
              <path fill="#fff" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#fff" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#fff"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#fff" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#fff"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#fff" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#fff"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#fff" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#fff"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#fff"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="url(#btn-primary-start-focus-2)"
                fillRule="evenodd"
                d="M1 17 13.5 4H62l2 2h116l2-2h48.5L243 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H182l-2-2H64l-2 2H13.5L1 49v-3l4-4h2V24H5l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-start-focus-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 83.105 238.902) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42D8F5" />
              <stop offset="1" stopColor="#17A1EF" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-center-focus-0)">
            <mask
              id="btn-primary-center-focus-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-center-focus-1)">
              <path fill="#fff" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path
                fill="url(#btn-primary-center-focus-2)"
                fillRule="evenodd"
                d="m-66 17 12.5-13H-5l2 2h116l2-2h48.5L176 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H115l-2-2H-3l-2 2h-48.5L-66 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-center-focus-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 49.605 78.58) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42D8F5" />
              <stop offset="1" stopColor="#17A1EF" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-end-focus-0)">
            <mask
              id="btn-primary-end-focus-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-primary-end-focus-1)">
              <path fill="#fff" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#fff" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#fff"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#fff" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#fff"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#fff" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#fff"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#fff" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#fff"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path fill="#fff" d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z" />
              <path
                fill="#fff"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="url(#btn-primary-end-focus-2)"
                fillRule="evenodd"
                d="m-175 17 12.5-13h48.5l2 2H4l2-2h48.5L67 17v3l-4 4h-3v18h3l4 4v3L54.5 62H6l-2-2h-116l-2 2h-48.5L-175 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-end-focus-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 -4.895 -182.242) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#42D8F5" />
              <stop offset="1" stopColor="#17A1EF" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={s['inner-shadow']}
          preserveAspectRatio="none"
          viewBox="0 0 243 66"
          fill="none"
        >
          <defs>
            <filter
              id="btn-primary-filter-focus"
              x="-19"
              y="-12"
              width="200%"
              height="200%"
              preserveAspectRatio="none"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.23 0 0 0 0 0.541267 0 0 0 0 0.766667 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4431_23100" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4431_23100" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix values="0 0 0 0 0.920833 0 0 0 0 0.92875 0 0 0 0 1 0 0 0 0.47 0" />
              <feBlend in2="shape" result="effect2_innerShadow_4431_23100" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix values="0 0 0 0 0.295833 0 0 0 0 0.662 0 0 0 0 1 0 0 0 0.51 0" />
              <feBlend
                in2="effect2_innerShadow_4431_23100"
                result="effect3_innerShadow_4431_23100"
              />
            </filter>
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
          <g clipPath="url(#btn-primary-start-hover-0)">
            <mask
              id="btn-primary-start-hover-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-start-hover-1)">
              <path fill="#00E5FF" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#00E5FF"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#00E5FF"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#00E5FF"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#00E5FF"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="url(#btn-primary-start-hover-2)"
                fillRule="evenodd"
                d="M1 17 13.5 4H62l2 2h116l2-2h48.5L243 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H182l-2-2H64l-2 2H13.5L1 49v-3l4-4h2V24H5l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-start-hover-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 83.105 238.902) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#27C0DE" />
              <stop offset="1" stopColor="#0D91DC" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-center-hover-0)">
            <mask
              id="btn-primary-center-hover-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-center-hover-1)">
              <path fill="#00E5FF" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path
                fill="url(#btn-primary-center-hover-2)"
                fillRule="evenodd"
                d="m-66 17 12.5-13H-5l2 2h116l2-2h48.5L176 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H115l-2-2H-3l-2 2h-48.5L-66 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-center-hover-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 49.605 78.58) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#27C0DE" />
              <stop offset="1" stopColor="#0D91DC" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-end-hover-0)">
            <mask
              id="btn-primary-end-hover-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-primary-end-hover-1)">
              <path fill="#00E5FF" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#00E5FF"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#00E5FF"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#00E5FF"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#00E5FF"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="url(#btn-primary-end-hover-2)"
                fillRule="evenodd"
                d="m-175 17 12.5-13h48.5l2 2H4l2-2h48.5L67 17v3l-4 4h-3v18h3l4 4v3L54.5 62H6l-2-2h-116l-2 2h-48.5L-175 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-end-hover-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 -4.895 -182.242) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#27C0DE" />
              <stop offset="1" stopColor="#0D91DC" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-shadow']}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 243 66"
          fill="none"
        >
          <defs>
            <filter
              id="btn-primary-filter-hover"
              x="-19"
              y="-12"
              width="200%"
              height="200%"
              preserveAspectRatio="none"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.23 0 0 0 0 0.541267 0 0 0 0 0.766667 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4411_16817" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4411_16817" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix values="0 0 0 0 0.920833 0 0 0 0 0.92875 0 0 0 0 1 0 0 0 0.47 0" />
              <feBlend in2="shape" result="effect2_innerShadow_4411_16817" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix values="0 0 0 0 0.295833 0 0 0 0 0.662 0 0 0 0 1 0 0 0 0.51 0" />
              <feBlend
                in2="effect2_innerShadow_4411_16817"
                result="effect3_innerShadow_4411_16817"
              />
            </filter>
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
          <g clipPath="url(#btn-primary-start-active-0)">
            <mask
              id="btn-primary-start-active-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-start-active-1)">
              <path fill="#00E5FF" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#00E5FF"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#00E5FF"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#00E5FF"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#00E5FF"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="url(#btn-primary-start-active-2)"
                fillRule="evenodd"
                d="M1 17 13.5 4H62l2 2h116l2-2h48.5L243 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H182l-2-2H64l-2 2H13.5L1 49v-3l4-4h2V24H5l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-start-active-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 83.105 238.902) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E9FBF" />
              <stop offset="1" stopColor="#0C73AD" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-center-active-0)">
            <mask
              id="btn-primary-center-active-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-center-active-1)">
              <path fill="#00E5FF" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path
                fill="url(#btn-primary-center-active-2)"
                fillRule="evenodd"
                d="m-66 17 12.5-13H-5l2 2h116l2-2h48.5L176 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H115l-2-2H-3l-2 2h-48.5L-66 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-center-active-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 49.605 78.58) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E9FBF" />
              <stop offset="1" stopColor="#0C73AD" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-end-active-0)">
            <mask
              id="btn-primary-end-active-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-primary-end-active-1)">
              <path fill="#00E5FF" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#00E5FF"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#00E5FF"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#00E5FF"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#00E5FF"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="url(#btn-primary-end-active-2)"
                fillRule="evenodd"
                d="m-175 17 12.5-13h48.5l2 2H4l2-2h48.5L67 17v3l-4 4h-3v18h3l4 4v3L54.5 62H6l-2-2h-116l-2 2h-48.5L-175 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-end-active-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 -4.895 -182.242) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E9FBF" />
              <stop offset="1" stopColor="#0C73AD" />
            </radialGradient>
          </defs>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={s['inner-shadow']}
          preserveAspectRatio="none"
          viewBox="0 0 243 66"
          fill="none"
        >
          <defs>
            <filter
              id="btn-primary-filter-active"
              x="-19"
              y="-12"
              width="200%"
              height="200%"
              preserveAspectRatio="none"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.23 0 0 0 0 0.541267 0 0 0 0 0.766667 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4431_23305" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4431_23305" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix values="0 0 0 0 0.691406 0 0 0 0 0.716016 0 0 0 0 0.9375 0 0 0 0.47 0" />
              <feBlend in2="shape" result="effect2_innerShadow_4431_23305" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-4" dy="-4" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix values="0 0 0 0 0.249722 0 0 0 0 0.622533 0 0 0 0 0.966667 0 0 0 0.51 0" />
              <feBlend
                in2="effect2_innerShadow_4431_23305"
                result="effect3_innerShadow_4431_23305"
              />
            </filter>
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
          <g clipPath="url(#btn-primary-start-disabled-0)">
            <mask
              id="btn-primary-start-disabled-1"
              width="243"
              height="66"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M243 0H0v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-start-disabled-1)">
              <path fill="#00E5FF" d="M4 10H0l2-2 2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 3-6 6" />
              <path
                fill="#00E5FF"
                d="M10 4V0L8 2l2 2ZM1 10H0v11h1V10ZM1 11v-1h1l-1 1ZM1 21v-1l1 1H1ZM4 21H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 22 1 1" />
              <path
                fill="#00E5FF"
                d="M6.999 24h-4l2-2 2 2ZM65 0H10v1h55V0ZM10 2V1h1l-1 1ZM65 2V1h-1l1 1ZM4 56H0l2 2 2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m9.001 63-6-6" />
              <path
                fill="#00E5FF"
                d="M10 62v4l-2-2 2-2ZM1 56H0V45h1v11ZM1 55v1h1l-1-1ZM1 45v1l1-1H1ZM4 45H0l2-2 2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m3 44 1-1" />
              <path
                fill="#00E5FF"
                d="M6.999 42h-4l2 2 2-2ZM65 66H10v-1h55v1ZM10 64v1h1l-1-1ZM65 64v1h-1l1-1ZM65 66v-2l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M66 65v-2l-1 1 1 1ZM177 64H66v-1h111v1ZM66 64v1l1-1h-1ZM65 0v2l1-1-1-1ZM66 1v2l-1-1 1-1ZM177 2H66v1h111V2ZM66 2V1l1 1h-1ZM7 24H6v18h1V24ZM6 25v-1H5l1 1ZM6 42v-1l-1 1h1ZM0 28v-3l3 3H0ZM3 28H0v10h3V28ZM0 41v-3h3l-3 3Z"
              />
              <path
                fill="url(#btn-primary-start-disabled-2)"
                fillRule="evenodd"
                d="M1 17 13.5 4H62l2 2h116l2-2h48.5L243 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H182l-2-2H64l-2 2H13.5L1 49v-3l4-4h2V24H5l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-start-disabled-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 83.105 238.902) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#148197" />
              <stop offset="1" stopColor="#113A60" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-center']}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 109 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-center-disabled-0)">
            <mask
              id="btn-primary-center-disabled-1"
              width="243"
              height="66"
              x="-67"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M176 0H-67v66h243V0Z" />
            </mask>
            <g mask="url(#btn-primary-center-disabled-1)">
              <path fill="#00E5FF" d="M110 64H-1v-1h111v1ZM110 2H-1v1h111V2Z" />
              <path
                fill="url(#btn-primary-center-disabled-2)"
                fillRule="evenodd"
                d="m-66 17 12.5-13H-5l2 2h116l2-2h48.5L176 17v3l-4 4h-3v18h3l4 4v3l-12.5 13H115l-2-2H-3l-2 2h-48.5L-66 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-center-disabled-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 49.605 78.58) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#148197" />
              <stop offset="1" stopColor="#113A60" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className={s['inner-end']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67 66"
          fill="none"
        >
          <g clipPath="url(#btn-primary-end-disabled-0)">
            <mask
              id="btn-primary-end-disabled-1"
              width="243"
              height="66"
              x="-176"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'luminance' }}
            >
              <path fill="#fff" d="M67 0h-243v66H67V0Z" />
            </mask>
            <g mask="url(#btn-primary-end-disabled-1)">
              <path fill="#00E5FF" d="M63 10h4l-2-2-2 2Z" />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 3 6 6" />
              <path
                fill="#00E5FF"
                d="M57 4V0l2 2-2 2ZM66 10h1v11h-1V10ZM66 11v-1h-1l1 1ZM66 21v-1l-1 1h1ZM63 21h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 22-1 1" />
              <path
                fill="#00E5FF"
                d="M60.001 24h4l-2-2-2 2ZM2 0h55v1H2V0ZM57 2V1h-1l1 1ZM2 2V1h1L2 2ZM63 56h4l-2 2-2-2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m57.999 63 6-6" />
              <path
                fill="#00E5FF"
                d="M57 62v4l2-2-2-2ZM66 56h1V45h-1v11ZM66 55v1h-1l1-1ZM66 45v1l-1-1h1ZM63 45h4l-2-2-2 2Z"
              />
              <path stroke="#00E5FF" strokeWidth="2.83" d="m64 44-1-1" />
              <path
                fill="#00E5FF"
                d="M60.001 42h4l-2 2-2-2ZM2 66h55v-1H2v1ZM57 64v1h-1l1-1ZM2 64v1h1l-1-1ZM1 64h-111v-1H1v1ZM1 64v1l-1-1h1ZM1 63v2l1-1-1-1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 64v2l-1-1 1-1ZM1 2h-111v1H1V2ZM1 2V1L0 2h1ZM1 3V1l1 1-1 1Z"
              />
              <path
                fill="#00E5FF"
                d="M2 2V0L1 1l1 1ZM60 24h1v18h-1V24ZM61 25v-1h1l-1 1ZM61 42v-1l1 1h-1ZM67 28v-3l-3 3h3ZM64 28h3v10h-3V28ZM67 41v-3h-3l3 3Z"
              />
              <path
                fill="url(#btn-primary-end-disabled-2)"
                fillRule="evenodd"
                d="m-175 17 12.5-13h48.5l2 2H4l2-2h48.5L67 17v3l-4 4h-3v18h3l4 4v3L54.5 62H6l-2-2h-116l-2 2h-48.5L-175 49v-3l4-4h2V24h-2l-4-4v-3Z"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id="btn-primary-end-disabled-2"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="rotate(23.605 -4.895 -182.242) scale(153.202 586.341)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#148197" />
              <stop offset="1" stopColor="#113A60" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={s['inner-shadow']}
          preserveAspectRatio="none"
          viewBox="0 0 243 66"
          fill="none"
        >
          <defs>
            <filter
              id="btn-primary-filter-disabled"
              x="-19"
              y="-12"
              width="200%"
              height="200%"
              preserveAspectRatio="none"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0.23 0 0 0 0 0.541267 0 0 0 0 0.766667 0 0 0 0.44 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4431_23510" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4431_23510" result="shape" />
            </filter>
          </defs>
        </svg>
      </span>
    </>
  );
};

export default memo(ButtonInnerPrimary);
