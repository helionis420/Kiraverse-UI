import { memo } from 'react';
import clsx from 'clsx';
import type { HeroProps } from './types';
import { ID_HERO } from '@/constants';
import {
  HERO_BG_VIDEO_WIDTH,
  HERO_BG_VIDEO_HEIGHT,
  HERO_BG_MOB_VIDEO_WIDTH,
  HERO_BG_MOB_VIDEO_HEIGHT,
  HERO_BG_VIDEO_SRC,
  HERO_BG_MOB_VIDEO_SRC,
  HERO_POSTER_VIDEO_SRC,
  HERO_POSTER_MOB_VIDEO_SRC,
} from './constants';
import Container from '@/components/Container';
import s from './Hero.module.css';

const Hero: React.FC<HeroProps> = ({
  className,
  children,
  bgVideoSrc = HERO_BG_VIDEO_SRC,
  bgMobVideoSrc = HERO_BG_MOB_VIDEO_SRC,
  videoPosterSrc = HERO_POSTER_VIDEO_SRC,
  videoPosterMobSrc = HERO_POSTER_MOB_VIDEO_SRC,
}) => {
  return (
    <section id={ID_HERO} className={clsx(s.wrap, className)}>
      <video
        className={clsx(s.video, s.desktop)}
        poster={videoPosterSrc}
        muted
        loop
        playsInline
        autoPlay
        width={HERO_BG_VIDEO_WIDTH}
        height={HERO_BG_VIDEO_HEIGHT}
      >
        <source src={bgVideoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
      <video
        className={clsx(s.video, s.mob)}
        poster={videoPosterMobSrc}
        muted
        loop
        playsInline
        autoPlay
        width={HERO_BG_MOB_VIDEO_WIDTH}
        height={HERO_BG_MOB_VIDEO_HEIGHT}
      >
        <source src={bgMobVideoSrc} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
      <Container className={s.container}>
        <div className={s.holder}>{children}</div>
      </Container>
    </section>
  );
};

export default memo(Hero);
