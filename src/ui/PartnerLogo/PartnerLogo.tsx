import { memo } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import type { PartnerLogoProps } from './types';
import { createSvgShimmer } from '@/utils/common';
import { PARTNER_LOGO_HEIGHT, PARTNER_LOGO_WIDTH, PARTNER_SHIMMER_SIZE } from './constants';
import PartnerLogoDefaultDecor from './components/PartnerLogoDefaultDecor';
import PartnerLogoHoverDecor from './components/PartnerLogoHoverDecor';
import PartnerLogoHoverFilterDecor from './components/PartnerLogoHoverFilterDecor';
import s from './PartnerLogo.module.css';

const PartnerLogo: React.FC<PartnerLogoProps> = ({ className, name }) => {
  return (
    <div className={clsx(s.wrap, className)}>
      <PartnerLogoDefaultDecor className={clsx(s.decor, s.default)} />
      <PartnerLogoHoverDecor className={clsx(s.decor, s.hover)} />
      <Image
        className={s.logo}
        src={`/images/partners/${name}.webp`}
        width={PARTNER_LOGO_WIDTH}
        height={PARTNER_LOGO_HEIGHT}
        alt={name}
        placeholder="blur"
        blurDataURL={createSvgShimmer(...PARTNER_SHIMMER_SIZE)}
      />
      <PartnerLogoHoverFilterDecor className={s.filter} />
    </div>
  );
};

export default memo(PartnerLogo);
