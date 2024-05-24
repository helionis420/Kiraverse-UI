import Image from 'next/image';
import { memo } from 'react';
import clsx from 'clsx';
import { NFTCardDecorProps } from './types';
import {
  NFT_CARD_DECOR_WIDTH,
  NFT_CARD_DECOR_HEIGHT,
  NFT_CARD_DECOR_CORNERS_WIDTH,
  NFT_CARD_DECOR_CORNERS_HEIGHT,
} from './constants';
import DecorIconBack from 'public/images/nft-card-decor/nft-card-back.svg';
import DecorIconFocus from 'public/images/nft-card-decor/nft-card-focus.svg';
import DecorIconHover from 'public/images/nft-card-decor/nft-card-hover.svg';
import DecorIconCornersHover from 'public/images/nft-card-decor/nft-card-corners-hover.svg';
import s from './NFTCardDecor.module.css';

const NFTCardDecor: React.FC<NFTCardDecorProps> = ({
  className,
  hoverClassName,
  focusClassName,
}) => {
  return (
    <>
      <span className={clsx(s.wrap, className)}>
        <Image
          className={s.image}
          src={DecorIconBack}
          width={NFT_CARD_DECOR_WIDTH}
          height={NFT_CARD_DECOR_HEIGHT}
          priority
          alt=""
        />
      </span>
      <span className={clsx(s.wrap, focusClassName, className)}>
        <Image
          className={s.image}
          src={DecorIconFocus}
          width={NFT_CARD_DECOR_WIDTH}
          height={NFT_CARD_DECOR_HEIGHT}
          priority
          alt=""
        />
      </span>
      <span className={clsx(s.wrap, hoverClassName, className)}>
        <Image
          className={s.image}
          src={DecorIconHover}
          width={NFT_CARD_DECOR_WIDTH}
          height={NFT_CARD_DECOR_HEIGHT}
          priority
          alt=""
        />
      </span>
      <span className={clsx(s.wrap, s.corners, hoverClassName, className)}>
        <Image
          className={s.image}
          src={DecorIconCornersHover}
          width={NFT_CARD_DECOR_CORNERS_WIDTH}
          height={NFT_CARD_DECOR_CORNERS_HEIGHT}
          priority
          alt=""
        />
      </span>
    </>
  );
};

export default memo(NFTCardDecor);
