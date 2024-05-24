import { memo } from 'react';
import clsx from 'clsx';
import type { BannerInnerProps } from './types';
import { IMAGE_BACKGROUND_BANNER_URL } from '../../constants';
import s from './BannerInner.module.css';

const BannerInner: React.FC<BannerInnerProps> = ({
  className,
  hoverClassName,
  children,
  withInnerImage,
  // innerImgSrc,
  size = 'md',
}) => {
  const imgSrc = withInnerImage ? IMAGE_BACKGROUND_BANNER_URL : undefined;

  // if (innerImgSrc) {
  //   imgSrc = innerImgSrc;
  // }

  return (
    <div className={clsx(s.wrap, s[size], className)}>
      <div className={s.decor}>
        <svg
          className={s.desktop}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 1214 399"
          fill="none"
        >
          <path
            fill="url(#banner-inner-0)"
            d="M1198 0H16C7.163 0 0 7.163 0 16v54.787A16 16 0 0 0 8.101 84.7l34.381 19.518a16.002 16.002 0 0 1 8.101 13.915V281.594a16 16 0 0 1-6.507 12.88L6.507 322.162A16 16 0 0 0 0 335.042V383c0 8.837 7.163 16 16 16h1182c8.84 0 16-7.163 16-16v-47.958c0-5.083-2.42-9.864-6.51-12.88l-37.57-27.688a16 16 0 0 1-6.5-12.88v-163.46c0-5.758 3.09-11.072 8.1-13.915l34.38-19.518a15.993 15.993 0 0 0 8.1-13.914V16c0-8.837-7.16-16-16-16Z"
          />
          <g filter="url(#banner-inner-1)">
            <path
              fill="#000"
              fillOpacity=".13"
              d="M1198 0H16C7.163 0 0 7.163 0 16v54.787A16 16 0 0 0 8.101 84.7l34.381 19.518a16.002 16.002 0 0 1 8.101 13.915V281.594a16 16 0 0 1-6.507 12.88L6.507 322.162A16 16 0 0 0 0 335.042V383c0 8.837 7.163 16 16 16h1182c8.84 0 16-7.163 16-16v-47.958c0-5.083-2.42-9.864-6.51-12.88l-37.57-27.688a16 16 0 0 1-6.5-12.88v-163.46c0-5.758 3.09-11.072 8.1-13.915l34.38-19.518a15.993 15.993 0 0 0 8.1-13.914V16c0-8.837-7.16-16-16-16Z"
            />
            <path
              stroke="url(#banner-inner-2)"
              d="M16 .5h1182c8.56 0 15.5 6.94 15.5 15.5v54.787c0 5.578-3 10.726-7.85 13.48l-34.38 19.517a16.506 16.506 0 0 0-8.35 14.35v163.46c0 5.242 2.49 10.172 6.71 13.283l37.57 27.688a15.507 15.507 0 0 1 6.3 12.477V383c0 8.56-6.94 15.5-15.5 15.5H16C7.44 398.5.5 391.56.5 383v-47.958c0-4.924 2.34-9.556 6.304-12.477l37.569-27.688a16.503 16.503 0 0 0 6.71-13.283V118.134c0-5.938-3.19-11.418-8.354-14.35L8.348 84.266A15.5 15.5 0 0 1 .5 70.786V16C.5 7.44 7.44.5 16 .5Z"
            />
          </g>
          <defs>
            <linearGradient
              id="banner-inner-2"
              x1="1214"
              x2="20.43"
              y1="398.851"
              y2="-53.995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A261F5" />
              <stop offset=".708" stopColor="#00E5FF" />
              <stop offset="1" stopColor="#A261F5" />
            </linearGradient>
            <pattern
              id="banner-inner-0"
              width="1"
              height="1"
              patternContentUnits="objectBoundingBox"
            >
              {withInnerImage && (
                <use
                  xlinkHref="#banner-inner-3"
                  transform="matrix(-.00113 -.00002 .00001 -.00225 1.057 1.571)"
                />
              )}
            </pattern>
            <filter
              id="banner-inner-1"
              width="1244"
              height="429"
              x="-15"
              y="-15"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4467_29965"
              />
              <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_4467_29965" result="shape" />
            </filter>
            {withInnerImage && (
              <image
                className={s.image}
                xlinkHref={imgSrc}
                id="banner-inner-3"
                preserveAspectRatio="none"
              />
            )}
          </defs>
        </svg>
        <svg
          className={clsx(s.inner, s.desktop, hoverClassName)}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 1214 399"
          fill="none"
        >
          <g filter="url(#banner-inner-hover-0)">
            <path
              stroke="#00E5FF"
              d="M16 .5h1182c8.56 0 15.5 6.94 15.5 15.5v54.787c0 5.578-3 10.726-7.85 13.48l-34.38 19.517a16.506 16.506 0 0 0-8.35 14.35v163.46c0 5.242 2.49 10.172 6.71 13.283l37.57 27.688a15.507 15.507 0 0 1 6.3 12.477V383c0 8.56-6.94 15.5-15.5 15.5H16C7.44 398.5.5 391.56.5 383v-47.958c0-4.924 2.34-9.556 6.304-12.477l37.569-27.688a16.503 16.503 0 0 0 6.71-13.283V118.134c0-5.938-3.19-11.418-8.354-14.35L8.348 84.266A15.5 15.5 0 0 1 .5 70.786V16C.5 7.44 7.44.5 16 .5Z"
            />
          </g>
          <defs>
            <filter
              id="banner-inner-hover-0"
              width="200%"
              height="200%"
              x="-15"
              y="-15"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4922_164178"
              />
              <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_4922_164178" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={s.holder}>{children}</div>
    </div>
  );
};

export default memo(BannerInner);
