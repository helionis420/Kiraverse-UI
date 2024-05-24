import { memo } from 'react';
import clsx from 'clsx';
import type { DevelopersItemDecorProps } from './types';
import s from './DevelopersItemDecor.module.css';

const DevelopersItemDecor: React.FC<DevelopersItemDecorProps> = ({ className }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <div className={s.backdrop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="763"
          height="480"
          viewBox="0 0 763 480"
          fill="none"
        >
          <g filter="url(#dev-item-decor-backdrop-0)">
            <circle
              cx="240"
              cy="240"
              r="40"
              fill="url(#dev-item-decor-backdrop-1)"
              fillOpacity=".6"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-backdrop-1"
              x1="211.209"
              x2="224.342"
              y1="274.681"
              y2="214.841"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A3FF" />
              <stop offset="1" stopColor="#6FEFF8" />
            </linearGradient>
            <filter
              id="dev-item-decor-backdrop-0"
              width="480"
              height="480"
              x="0"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_4971_159091" stdDeviation="100" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={s.head}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="783"
          height="161"
          preserveAspectRatio="none"
          viewBox="0 0 783 161"
          fill="none"
        >
          <g filter="url(#dev-item-decor-head-0)">
            <path
              stroke="url(#dev-item-decor-head-1)"
              d="M768.5 110.146V37.73a10 10 0 0 0-1.737-5.633l-8.551-12.543a10 10 0 0 0-8.263-4.367h-70.638a9.999 9.999 0 0 0-8.24 4.335l-5.713 8.31a10.002 10.002 0 0 1-8.241 4.335H505.553a10 10 0 0 1-8.48-4.7l-4.738-7.58a10 10 0 0 0-8.48-4.7H31.718a10 10 0 0 0-8.013 4.017l-7.218 9.667a10 10 0 0 0-1.987 5.983v74.514"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-head-1"
              x1="391.5"
              x2="391.5"
              y1="24.579"
              y2="110.146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
            </linearGradient>
            <filter
              id="dev-item-decor-head-0"
              width="783"
              height="123.459"
              x="0"
              y=".687"
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
                result="effect1_dropShadow_4971_159091"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4971_159091" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4971_159091" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={clsx(s.item, s.top)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 756 21"
          fill="none"
        >
          <g clipPath="url(#dev-item-decor-top-0)">
            <path
              fill="url(#dev-item-decor-top-1)"
              d="M10.5 146h735c5.523 0 10-4.477 10-10V22.234c0-2.12-.674-4.185-1.924-5.898l-7.823-10.713a9.993 9.993 0 0 0-8.076-4.103h-72.952a10 10 0 0 0-8.298 4.42l-5.205 7.74a9.999 9.999 0 0 1-8.298 4.419H536.752l-43.786.773a9.999 9.999 0 0 1-8.603-4.614l-5.201-8.14a10.003 10.003 0 0 0-8.394-4.616L18.453.017a10 10 0 0 0-8.21 4.243l-7.92 11.25A10 10 0 0 0 .5 21.266V136c0 5.523 4.477 10 10 10Z"
            />
            <path
              stroke="url(#dev-item-decor-top-2)"
              d="M745.5 145.5h-735A9.502 9.502 0 0 1 1 136V21.266a9.5 9.5 0 0 1 1.732-5.47l7.92-11.248a9.5 9.5 0 0 1 7.8-4.03l452.314 1.484a9.506 9.506 0 0 1 7.975 4.385l5.2 8.14a10.495 10.495 0 0 0 9.034 4.845l43.777-.773h106.172c3.495 0 6.762-1.74 8.713-4.64l5.205-7.74a9.497 9.497 0 0 1 7.883-4.2h72.952a9.5 9.5 0 0 1 7.672 3.899l7.823 10.713A9.5 9.5 0 0 1 755 22.234V136a9.503 9.503 0 0 1-2.782 6.718 9.503 9.503 0 0 1-6.718 2.782Z"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-top-1"
              x1="134.149"
              x2="720.833"
              y1="0"
              y2="167.784"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".05" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dev-item-decor-top-2"
              x1="4153"
              x2="3532.3"
              y1="-362.483"
              y2="1254.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".1" />
            </linearGradient>
            <clipPath id="dev-item-decor-top-0">
              <path fill="#fff" d="M0 0h756v21H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={clsx(s.item, s.center)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 756 115"
          fill="none"
        >
          <g clipPath="url(#dev-item-decor-center-0)">
            <path
              fill="url(#dev-item-decor-center-1)"
              d="M10.5 125h735c5.523 0 10-4.477 10-10V1.234c0-2.12-.674-4.185-1.924-5.898l-7.823-10.713a9.994 9.994 0 0 0-8.076-4.103h-72.952a10 10 0 0 0-8.298 4.42l-5.205 7.74a10 10 0 0 1-8.298 4.419H536.752l-43.786.773a9.999 9.999 0 0 1-8.603-4.614l-5.201-8.14a10.003 10.003 0 0 0-8.394-4.616L18.453-20.983a9.999 9.999 0 0 0-8.21 4.243L2.323-5.49A10 10 0 0 0 .5.266V115c0 5.523 4.477 10 10 10Z"
            />
            <path
              stroke="url(#dev-item-decor-center-2)"
              d="M745.5 124.5h-735A9.502 9.502 0 0 1 1 115V.266a9.5 9.5 0 0 1 1.732-5.47l7.92-11.248a9.5 9.5 0 0 1 7.8-4.03l452.314 1.484a9.506 9.506 0 0 1 7.975 4.385l5.2 8.14a10.496 10.496 0 0 0 9.034 4.845l43.777-.773h106.172c3.495 0 6.762-1.74 8.713-4.64l5.205-7.74a9.497 9.497 0 0 1 7.883-4.2h72.952a9.5 9.5 0 0 1 7.672 3.899l7.823 10.713A9.5 9.5 0 0 1 755 1.234V115a9.503 9.503 0 0 1-2.782 6.718 9.503 9.503 0 0 1-6.718 2.782Z"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-center-1"
              x1="134.149"
              x2="720.833"
              y1="-21"
              y2="146.784"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".05" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dev-item-decor-center-2"
              x1="4153"
              x2="3532.3"
              y1="-383.483"
              y2="1233.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".1" />
            </linearGradient>
            <clipPath id="dev-item-decor-center-0">
              <path fill="#fff" d="M0 0h756v115H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={clsx(s.item, s.bottom)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 756 11"
          fill="none"
        >
          <g clipPath="url(#dev-item-decor-bottom-0)">
            <path
              fill="url(#dev-item-decor-bottom-1)"
              d="M10.5 10h735c5.523 0 10-4.477 10-10v-113.766c0-2.12-.674-4.185-1.924-5.898l-7.823-10.713a9.995 9.995 0 0 0-8.076-4.103h-72.952a9.996 9.996 0 0 0-8.298 4.42l-5.205 7.74a9.996 9.996 0 0 1-8.298 4.419H536.752l-43.786.773a9.999 9.999 0 0 1-8.603-4.614l-5.201-8.14a10.012 10.012 0 0 0-3.608-3.379 10.012 10.012 0 0 0-4.786-1.237l-452.315-1.485a9.999 9.999 0 0 0-8.21 4.243l-7.92 11.25A10 10 0 0 0 .5-114.734V0c0 5.523 4.477 10 10 10Z"
            />
            <path
              stroke="url(#dev-item-decor-bottom-2)"
              d="M745.5 9.5h-735A9.5 9.5 0 0 1 1 0v-114.734a9.5 9.5 0 0 1 1.732-5.47l7.92-11.248a9.49 9.49 0 0 1 7.8-4.03l452.314 1.484a9.498 9.498 0 0 1 7.975 4.385l5.2 8.14a10.505 10.505 0 0 0 9.034 4.845l43.777-.773h106.172c3.495 0 6.762-1.74 8.713-4.64l5.205-7.74a9.491 9.491 0 0 1 7.883-4.2h72.952a9.493 9.493 0 0 1 7.672 3.899l7.823 10.713a9.501 9.501 0 0 1 1.828 5.603V0a9.502 9.502 0 0 1-9.5 9.5Z"
            />
          </g>
          <defs>
            <linearGradient
              id="dev-item-decor-bottom-1"
              x1="134.149"
              x2="720.833"
              y1="-136"
              y2="31.784"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity=".05" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="dev-item-decor-bottom-2"
              x1="4153"
              x2="3532.3"
              y1="-498.483"
              y2="1118.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".1" />
            </linearGradient>
            <clipPath id="dev-item-decor-bottom-0">
              <path fill="#fff" d="M0 0h756v11H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default memo(DevelopersItemDecor);
