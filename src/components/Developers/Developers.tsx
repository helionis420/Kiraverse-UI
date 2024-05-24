import { memo } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { DevelopersProps } from './types';
import type { IconIdType } from '@/ui/Icon';
import { FADE_IN_UP, ID_DEVELOPERS } from '@/constants';
import {
  DEVELOPERS_DECOR_ICON_MOV_SRC,
  DEVELOPERS_DECOR_ICON_WEBM_SRC,
  DEVELOPERS_DECOR_ICON_WIDTH,
  DEVELOPERS_DECOR_ICON_HEIGHT,
  DEVELOPERS_ITEMS,
} from './constants';
import Container from '@/components/Container';
import Caption from '@/ui/Caption';
import Typography from '@/ui/Typography';
import DevelopersItem from './components/DevelopersItem';
import s from './Developers.module.css';

const Developers: React.FC<DevelopersProps> = ({ className, children, title }) => {
  return (
    <section id={ID_DEVELOPERS} className={clsx(s.wrap, className)}>
      <Container className={s.container}>
        <Caption className={s.caption} title="Developers" />
        <div className={s.holder}>
          <div className={s.icon}>
            <video
              muted
              loop
              playsInline
              autoPlay
              width={DEVELOPERS_DECOR_ICON_WIDTH}
              height={DEVELOPERS_DECOR_ICON_HEIGHT}
            >
              <source src={DEVELOPERS_DECOR_ICON_MOV_SRC} type={'video/mp4; codecs="hvc1"'} />
              <source
                src={DEVELOPERS_DECOR_ICON_WEBM_SRC}
                type={'video/webm; codecs="vp8, vorbis"'}
              />
            </video>
          </div>
          <div className={s.head}>
            <Typography className={s.title} component="h3" variant="headline-h3">
              {title}
            </Typography>
            {children && (
              <div className={s.desc}>
                <Typography className={s.text} variant="body-large" component="p">
                  {children}
                </Typography>
              </div>
            )}
          </div>
          <motion.ul
            className={s.items}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {DEVELOPERS_ITEMS.map((item) => {
              return (
                <motion.li key={item.id} custom={item.id} variants={FADE_IN_UP}>
                  <DevelopersItem title={item.title} icon={item.iconId as IconIdType}>
                    {item.description}
                  </DevelopersItem>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
};

export default memo(Developers);
