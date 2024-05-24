import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';
import type { SeasonItemProps } from './types';
import { URL_LINK_DOWNLOAD } from '@/constants';
import { SEASON_ITEM_IMAGE_WIDTH, SEASON_ITEM_IMAGE_HEIGHT } from './constants';
import { createSvgShimmer } from '@/utils/common';
import Typography from '@/ui/Typography';
import Button from '@/ui/Button';
import HeadDecor from './components/HeadDecor';
import s from './SeasonItem.module.css';

const SeasonItem: React.FC<SeasonItemProps> = ({
  className,
  title,
  description,
  contentClassName,
  imgSrc,
  imgAlt = 'Kiraverse season',
}) => {
  return (
    <div className={clsx(s.wrap, className, contentClassName)}>
      <div className={s.holder}>
        <div className={s.figure}>
          <HeadDecor />
          <div className={s['figure-body']}>
            <div className={s['figure-holder']}>
              <Image
                src={imgSrc}
                width={SEASON_ITEM_IMAGE_WIDTH}
                height={SEASON_ITEM_IMAGE_HEIGHT}
                alt={imgAlt}
                placeholder="blur"
                blurDataURL={createSvgShimmer(SEASON_ITEM_IMAGE_WIDTH, SEASON_ITEM_IMAGE_HEIGHT)}
              />
            </div>
          </div>
        </div>
        <div className={s.side}>
          <div className={clsx(s.content, contentClassName)}>
            <Typography className={s.title} variant="headline-primary-uppercase" component="h4">
              {title}
            </Typography>
            <div className={s.desc}>
              <Typography className={s.text} variant="body-large" component="p">
                {description}
              </Typography>
            </div>
            <div className={s.action}>
              <Button href={URL_LINK_DOWNLOAD} variant="secondary">
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SeasonItem);
