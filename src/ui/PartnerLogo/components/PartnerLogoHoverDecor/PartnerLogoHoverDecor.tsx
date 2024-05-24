import { memo } from 'react';
import type { PartnerLogoHoverDecorProps } from './types';

const PartnerLogoHoverDecor: React.FC<PartnerLogoHoverDecorProps> = ({ className }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 156 48">
      <path
        fill="#080D0EE5"
        fillOpacity=".9"
        stroke="url(#partners-hover-decor-gradient)"
        strokeWidth="2"
        d="M155 13.612V47h-12.151v-3h-20.62v3H15.885L1 33.556V1h137.897L155 13.612Z"
      />
      <defs>
        <linearGradient
          id="partners-hover-decor-gradient"
          x1="78"
          x2="78"
          y1="-15.407"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C23D6" />
          <stop offset="1" stopColor="#383439" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(PartnerLogoHoverDecor);
