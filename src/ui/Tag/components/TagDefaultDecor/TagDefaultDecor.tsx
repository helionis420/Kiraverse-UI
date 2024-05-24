import { memo } from 'react';
import type { TagDefaultDecorProps } from './types';

const TagDefaultDecor: React.FC<TagDefaultDecorProps> = ({ className }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 156 48">
      <path
        fill="#D1D1D1"
        fillOpacity=".1"
        stroke="url(#tag-default-0)"
        strokeWidth="2"
        d="M155 13.612V47h-12.151v-3h-20.62v3H15.885L1 33.556V1h137.897L155 13.612Z"
      />
      <defs>
        <linearGradient
          id="tag-default-0"
          x1="78"
          x2="78"
          y1="-15.407"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7C23D6" />
          <stop offset="1" stopColor="#09020C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(TagDefaultDecor);
