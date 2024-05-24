import { memo } from 'react';
import type { VideoPreviewProps } from './types';
import {
  VIDEO_PREVIEW_SRC,
  VIDEO_MOB_PREVIEW_SRC,
  VIDEO_PREVIEW_WIDTH,
  VIDEO_PREVIEW_HEIGHT,
} from './constants';
import CircleButton from '@/ui/CircleButton';
import s from './VideoPreview.module.css';

const VideoPreview: React.FC<VideoPreviewProps> = ({
  urlToVideo,
  videoSrc = VIDEO_PREVIEW_SRC,
  videoMobSrc = VIDEO_MOB_PREVIEW_SRC,
}) => {
  return (
    <div className={s.wrap}>
      <div className={s.holder}>
        <div className={s.inner}>
          <video
            className={s.desktop}
            muted
            loop
            playsInline
            autoPlay
            width={VIDEO_PREVIEW_WIDTH}
            height={VIDEO_PREVIEW_HEIGHT}
          >
            <source src={videoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          </video>
          <video
            className={s.mob}
            muted
            loop
            playsInline
            autoPlay
            width={VIDEO_PREVIEW_WIDTH}
            height={VIDEO_PREVIEW_HEIGHT}
          >
            <source src={videoMobSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          </video>
          {urlToVideo && (
            <CircleButton href={urlToVideo} className={s['link']} iconId="icon-arrow-right_24">
              Watch the trailer
            </CircleButton>
          )}
        </div>
      </div>
      <div className={s.decor}>
        <svg
          className={s['decor-desktop']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 626 194"
          fill="none"
        >
          <path fill="url(#video-desktop-decor)" d="M118 182 0 0h626L504 182H118Z" opacity=".4" />
          <path fill="#00E5FF" d="M105 184h-4l2 2 2-2Z" />
          <path stroke="#00E5FF" strokeWidth="2.83" d="m104 185 6 6" />
          <path fill="#00E5FF" d="M110.999 190v4l-2-2 2-2ZM516 190v4l2-2-2-2Z" />
          <path stroke="#00E5FF" strokeWidth="2.83" d="m523.001 185-6 6" />
          <path
            fill="#00E5FF"
            d="M526 184h-4l2 2 2-2ZM111 192h405v2H111zM111 192v-2l2 2h-2ZM516 192v-2l-2 2h2Z"
          />
          <defs>
            <linearGradient
              id="video-desktop-decor"
              x1="313"
              x2="313"
              y1="18"
              y2="182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className={s['decor-mob']}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 63"
          fill="none"
        >
          <path fill="url(#video-mob-decor)" d="M91 61 32 0h313l-61 61H91Z" opacity=".4" />
          <path fill="#00E5FF" d="M66 53h-4l2 2 2-2Z" />
          <path stroke="#00E5FF" strokeWidth="2.83" d="m65 54 6 6" />
          <path fill="#00E5FF" d="M71.999 59v4l-2-2 2-2ZM305 59v4l2-2-2-2Z" />
          <path stroke="#00E5FF" strokeWidth="2.83" d="m312.001 54-6 6" />
          <path
            fill="#00E5FF"
            d="M315 53h-4l2 2 2-2ZM72 61h233v2H72zM72 61v-2l2 2h-2ZM305 61v-2l-2 2h2Z"
          />
          <defs>
            <linearGradient
              id="video-mob-decor"
              x1="189"
              x2="188.5"
              y1="-92.5"
              y2="61"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E5FF" />
              <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default memo(VideoPreview);
