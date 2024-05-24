import { memo } from 'react';
import type { AboutUsProps } from './types';
import { ID_ABOUT_US } from '@/constants';
import Container from '@/components/Container';
import Banner from '@/components/Banner';
import BannerTitle from '@/components/BannerTitle';
import Typography from '@/ui/Typography';
import Button from '@/ui/Button';
import Caption from '@/ui/Caption';
import VideoPreview from '@/components/VideoPreview';
import s from './AboutUs.module.css';

const AboutUs: React.FC<AboutUsProps> = ({
  children,
  title,
  videoSrc,
  videoMobSrc,
  urlToVideo,
}) => {
  return (
    <section id={ID_ABOUT_US} className={s.wrap}>
      <Caption className={s.caption} title="About Us" />
      <div className={s.top}>
        <Container className={s.container}>
          <div className={s['banner-wrap']}>
            <Banner
              className={s.banner}
              withInnerBlock={false}
              withIconsResponsive
              innerBlockSize="md"
            >
              <div className={s['banner-title']}>
                <BannerTitle
                  decorColorClassName={s['banner-decor']}
                  classNameHolder={s['banner-title-holder']}
                  size="md"
                >
                  {title}
                </BannerTitle>
              </div>
            </Banner>
            <div className={s['banner-holder']}>
              <div className={s['banner-content']}>
                <Typography className={s['banner-desc']} variant="body-large" component="p">
                  {children}
                </Typography>
              </div>
              <div className={s['banner-action']}>
                <Button className={s.btn} size="md" variant="primary">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {videoSrc && (
        <div className={s.bottom}>
          <Container className={s.container}>
            <VideoPreview videoSrc={videoSrc} videoMobSrc={videoMobSrc} urlToVideo={urlToVideo} />
          </Container>
        </div>
      )}
    </section>
  );
};

export default memo(AboutUs);
