import { memo } from 'react';
import clsx from 'clsx';
import type { DevelopersItemDecorSmProps } from './types';
import s from './DevelopersItemDecorSm.module.css';

const DevelopersItemDecorSm: React.FC<DevelopersItemDecorSmProps> = ({ className }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.backdrop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="489"
          viewBox="0 0 375 480"
          fill="none"
        >
          <g filter="url(#dev-item-decor-backdrop-mob-0)">
            <circle
              cx="213.5"
              cy="240.5"
              r="40"
              fill="url(#dev-item-decor-backdrop-mob-1)"
              fillOpacity=".6"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-backdrop-mob-1"
              x1="184.709"
              x2="197.842"
              y1="275.181"
              y2="215.341"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A3FF" />
              <stop offset="1" stopColor="#6FEFF8" />
            </linearGradient>
            <filter
              id="dev-item-decor-backdrop-mob-0"
              width="480"
              height="480"
              x="-26.5"
              y=".5"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_5245_183899" stdDeviation="100" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={s.head}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="364"
          height="290"
          preserveAspectRatio="none"
          viewBox="0 0 364 290"
          fill="none"
        >
          <g filter="url(#dev-item-decor-head-mob-0)">
            <path
              stroke="url(#dev-item-decor-head-mob-1)"
              d="M349.5 60.5V26.795a10 10 0 0 0-1.521-5.301l-1.435-2.296a10 10 0 0 0-8.479-4.698h-25.666a8.815 8.815 0 0 0-7.456 4.113 8.814 8.814 0 0 1-7.455 4.112h-62.537a8.181 8.181 0 0 1-7.098-4.112 8.181 8.181 0 0 0-7.098-4.113H25.195a10 10 0 0 0-8.252 4.35l-.694 1.014a10 10 0 0 0-1.749 5.65v34.609"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-head-mob-1"
              x1="182"
              x2="182"
              y1="19.049"
              y2="60.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
            </linearGradient>
            <filter
              id="dev-item-decor-head-mob-0"
              width="364"
              height="74.5"
              x="0"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feMorphology
                in="SourceAlpha"
                operator="dilate"
                radius="4"
                result="effect1_dropShadow_5245_183899"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5245_183899" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_5245_183899" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={clsx(s.item, s.top)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 336 13"
          fill="none"
        >
          <g clipPath="url(#dev-item-decor-top-mob-0)">
            <path
              fill="url(#dev-item-decor-top-mob-1)"
              d="M10.5 276.5h315.001c5.523 0 10-4.477 10-10L335.5 12.814a10 10 0 0 0-1.654-5.508l-1.035-1.569a10 10 0 0 0-8.346-4.491h-26.844a8.468 8.468 0 0 0-7.235 4.069 8.467 8.467 0 0 1-7.235 4.068H238.44l-16.899.33a8.49 8.49 0 0 1-7.517-4.241 8.489 8.489 0 0 0-7.32-4.244L11.667.52a10 10 0 0 0-8.472 4.63l-1.13 1.776A10 10 0 0 0 .5 12.296V266.5c0 5.523 4.478 10 10 10Z"
            />
            <path
              stroke="url(#dev-item-decor-top-mob-2)"
              d="M325.501 276h-315a9.5 9.5 0 0 1-9.5-9.5V12.296a9.5 9.5 0 0 1 1.485-5.101l1.13-1.776a9.5 9.5 0 0 1 8.05-4.399l195.036.708a7.99 7.99 0 0 1 6.889 3.994 8.99 8.99 0 0 0 7.96 4.491l16.889-.33H283.151a8.966 8.966 0 0 0 7.662-4.309 7.968 7.968 0 0 1 6.808-3.828h26.844a9.502 9.502 0 0 1 7.929 4.267l1.035 1.568A9.5 9.5 0 0 1 335 12.814l.001 253.686a9.5 9.5 0 0 1-9.5 9.5Z"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-top-mob-1"
              x1="59.802"
              x2="340.865"
              y1=".5"
              y2="12.874"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".05" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dev-item-decor-top-mob-2"
              x1="1843"
              x2="282.012"
              y1="-684.741"
              y2="269.787"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".1" />
            </linearGradient>
            <clipPath id="dev-item-decor-top-mob-3">
              <path fill="#fff" d="M0 0h336v13H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={clsx(s.item, s.center)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 336 253"
          fill="none"
        >
          <g clipPath="url(#dev-item-decor-center-mob-0)">
            <path
              fill="url(#dev-item-decor-center-mob-1)"
              d="M10.5 263.5h315.001c5.523 0 10-4.477 10-10L335.5-.186a10 10 0 0 0-1.654-5.508l-1.035-1.569a10 10 0 0 0-8.346-4.491h-26.844a8.468 8.468 0 0 0-7.235 4.069 8.467 8.467 0 0 1-7.235 4.068H238.44l-16.899.33a8.49 8.49 0 0 1-7.517-4.241 8.489 8.489 0 0 0-7.32-4.244L11.667-12.48a10 10 0 0 0-8.472 4.63l-1.13 1.776A10 10 0 0 0 .5-.704V253.5c0 5.523 4.478 10 10 10Z"
            />
            <path
              stroke="url(#dev-item-decor-center-mob-2)"
              d="M325.501 263h-315a9.5 9.5 0 0 1-9.5-9.5V-.704a9.5 9.5 0 0 1 1.485-5.101l1.13-1.776a9.5 9.5 0 0 1 8.05-4.399l195.036.708a7.99 7.99 0 0 1 6.889 3.994 8.99 8.99 0 0 0 7.96 4.491l16.889-.33H283.151a8.966 8.966 0 0 0 7.662-4.309 7.969 7.969 0 0 1 6.808-3.828h26.844a9.502 9.502 0 0 1 7.929 4.267l1.035 1.568A9.5 9.5 0 0 1 335-.186l.001 253.686a9.5 9.5 0 0 1-9.5 9.5Z"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-center-mob-1"
              x1="59.802"
              x2="340.865"
              y1="-12.5"
              y2="-.126"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".05" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dev-item-decor-center-mob-2"
              x1="1843"
              x2="282.012"
              y1="-697.741"
              y2="256.787"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".1" />
            </linearGradient>
            <clipPath id="dev-item-decor-center-mob-0">
              <path fill="#fff" d="M0 0h336v253H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={clsx(s.item, s.bottom)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 336 12"
          fill="none"
        >
          <g clipPath="url(#dev-item-decor-bottom-mob-0)">
            <path
              fill="url(#dev-item-decor-bottom-mob-1)"
              d="M10.5 11.5h315.001c5.523 0 10-4.477 10-10l-.001-253.686c0-1.958-.575-3.874-1.654-5.509l-1.035-1.568a10 10 0 0 0-8.346-4.491h-26.844a8.467 8.467 0 0 0-7.235 4.069 8.467 8.467 0 0 1-7.235 4.068H238.44l-16.899.331a8.492 8.492 0 0 1-7.517-4.242 8.488 8.488 0 0 0-7.32-4.244l-195.037-.708a10.002 10.002 0 0 0-8.472 4.631l-1.13 1.775a10.003 10.003 0 0 0-1.565 5.37V1.5c0 5.523 4.478 10 10 10Z"
            />
            <path
              stroke="url(#dev-item-decor-bottom-mob-2)"
              d="M325.501 11h-315A9.5 9.5 0 0 1 1 1.5v-254.204a9.5 9.5 0 0 1 1.485-5.101l1.13-1.776a9.5 9.5 0 0 1 8.05-4.399l195.036.708a7.992 7.992 0 0 1 6.889 3.994 8.99 8.99 0 0 0 7.96 4.492l16.889-.331H283.151a8.965 8.965 0 0 0 7.662-4.309 7.969 7.969 0 0 1 6.808-3.828h26.844a9.501 9.501 0 0 1 7.929 4.267l1.035 1.568a9.5 9.5 0 0 1 1.571 5.233L335.001 1.5a9.5 9.5 0 0 1-9.5 9.5Z"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-bottom-mob-1"
              x1="59.802"
              x2="340.865"
              y1="-264.5"
              y2="-252.126"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".05" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dev-item-decor-bottom-mob-2"
              x1="1843"
              x2="282.012"
              y1="-949.741"
              y2="4.787"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".1" />
            </linearGradient>
            <clipPath id="dev-item-decor-bottom-mob-0">
              <path fill="#fff" d="M0 0h336v12H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default memo(DevelopersItemDecorSm);
