import Icon from '@/ui/Icon';
import Typography from '@/ui/Typography';
import { createSvgShimmer } from '@/utils/common';
import {
  Fallback as RadixAvatarFallback,
  Image as RadixAvatarImage,
  Root as RadixAvatarRoot,
  type ImageLoadingStatus,
} from '@radix-ui/react-avatar';
import clsx from 'clsx';
import Image from 'next/image';
import { memo, useState } from 'react';
import s from './Avatar.module.css';
import type { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ className, url, fallbackName, fallbackIcon, alt }) => {
  const [loadStatus, setLoadStatus] = useState<ImageLoadingStatus>('loading');

  const isShimmerDisplay = loadStatus !== 'loaded' && loadStatus !== 'error';

  return (
    <RadixAvatarRoot className={clsx(s.wrap, className)}>
      {isShimmerDisplay ? (
        <Image
          className={s.shimmer}
          src={createSvgShimmer(64, 64)}
          width={64}
          height={64}
          alt="shimmer"
        />
      ) : null}
      <RadixAvatarImage
        className={s.image}
        src={url}
        alt={alt}
        onLoadingStatusChange={setLoadStatus}
      />
      <RadixAvatarFallback className={s.fallback} delayMs={0}>
        {fallbackIcon ? (
          <Icon className={s.icon} id={fallbackIcon} />
        ) : (
          <Typography className={s.text} variant="body-small-mono">
            {fallbackName}
          </Typography>
        )}
      </RadixAvatarFallback>
    </RadixAvatarRoot>
  );
};

export default memo(Avatar);
