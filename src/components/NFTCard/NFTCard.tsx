import Image from 'next/image';
import { memo, useState } from 'react';
import clsx from 'clsx';
import type { NFTCardProps } from './types';
import { createSvgShimmer } from '@/utils/common';
import { NFT_CARD_IMAGE_HEIGHT, NFT_CARD_IMAGE_WIDTH, NFT_CARD_IMAGE_SRC } from './constants';
import Typography from '@/ui/Typography';
import Button from '@/ui/Button';
import NFTCardDecor from './components/NFTCardDecor';
import s from './NFTCard.module.css';

const NFTCard: React.FC<NFTCardProps> = ({
  className,
  imgSrc = '',
  imgAlt = 'NFT Image',
  name,
  nick = '',
  href,
  ...rest
}) => {
  const [src, setSrc] = useState<string>(imgSrc);
  return (
    <div className={clsx(s.wrap, className)} tabIndex={0} {...rest}>
      <NFTCardDecor
        className={s.decor}
        hoverClassName={s['decor-hover']}
        focusClassName={s['decor-focus']}
      />
      <div className={s.holder}>
        <div className={s.inner}>
          <div className={s.image}>
            <Image
              src={src}
              width={NFT_CARD_IMAGE_WIDTH}
              height={NFT_CARD_IMAGE_HEIGHT}
              alt={imgAlt}
              placeholder="blur"
              blurDataURL={createSvgShimmer(NFT_CARD_IMAGE_WIDTH, NFT_CARD_IMAGE_HEIGHT)}
              onError={() => {
                setSrc(NFT_CARD_IMAGE_SRC);
              }}
            />
          </div>
          <div className={s.items}>
            <Typography className={s.item} variant="headline-primary" component="h3">
              {name}
            </Typography>
            <Typography className={clsx(s.item, s.nick)} variant="body-small-mono">
              {nick}
            </Typography>
          </div>
          <div className={s['action-holder']}>
            <div className={s['action-wrap']}>
              <div className={s['action-inner']}>
                <Button href={href} className="w-full" size="md" variant="primary">
                  Collect now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NFTCard);
