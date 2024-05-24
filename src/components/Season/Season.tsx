import { memo, useRef, useEffect } from 'react';
import clsx from 'clsx';
import SwiperCore, { Pagination, Navigation, A11y, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SeasonProps } from './types';
import useIsClient from '@/hooks/useIsClient';
import { ID_SEASON } from '@/constants';
import { INITIAL_SLIDE, SLIDES_PER_VIEW, SPACE_BETWEEN_SLIDE, SEASON_ITEMS } from './constants';
import Container from '@/components/Container';
import Typography from '@/ui/Typography';
import Caption from '@/ui/Caption';
import IconCircleButton from '@/ui/IconCircleButton';
import SeasonItem from './components/SeasonItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Season.module.css';

const Season: React.FC<SeasonProps> = ({ children, title }) => {
  const swiperRef = useRef<SwiperCore>();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const isClient = useIsClient();

  const onSwiperUpdate = (swiper: SwiperCore) => {
    if (
      swiper?.params?.navigation !== undefined &&
      typeof swiper?.params?.navigation !== 'boolean'
    ) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
    }

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };

  useEffect(() => {
    if (!isClient && !swiperRef.current) {
      return;
    }

    const { current } = swiperRef;

    if (current) {
      current?.update();
    }
  }, [isClient, swiperRef]);

  return (
    <section id={ID_SEASON} className={s.wrap}>
      <Caption className={s.caption} title="Game modes" />
      <Container className={s.container}>
        <div className={s.head}>
          <Typography className={s.title} variant="headline-h3" component="h3">
            {title}
          </Typography>
          <div className={s.desc}>
            <Typography className={s.text} variant="body-large" component="p">
              {children}
            </Typography>
          </div>
        </div>
        <div className={s.holder}>
          <IconCircleButton
            className={clsx(s['slider-btn'], s.prev)}
            ref={navigationPrevRef}
            icon="icon-arrow-right_24"
            reverse
            variant="primary"
          />
          <div className={s['slider-wrap']}>
            <Swiper
              className={s.slider}
              modules={[Pagination, Navigation, A11y, Lazy]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onUpdate={onSwiperUpdate}
              pagination={{ clickable: true }}
              onSwiper={(swiper: SwiperCore) => {
                return (swiperRef.current = swiper);
              }}
              lazy
              slidesPerView={SLIDES_PER_VIEW}
              initialSlide={INITIAL_SLIDE}
              spaceBetween={SPACE_BETWEEN_SLIDE}
              watchOverflow
              observer
              observeParents
              observeSlideChildren
              watchSlidesProgress
            >
              {SEASON_ITEMS.map((item, i) => {
                return (
                  <SwiperSlide key={i} className={s.slide}>
                    <SeasonItem className={s.item} contentClassName={s['item-content']} {...item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <IconCircleButton
            className={clsx(s['slider-btn'], s.next)}
            ref={navigationNextRef}
            icon="icon-arrow-right_24"
            variant="primary"
          />
        </div>
      </Container>
    </section>
  );
};

export default memo(Season);
