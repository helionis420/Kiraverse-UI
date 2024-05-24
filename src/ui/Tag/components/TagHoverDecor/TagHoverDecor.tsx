import { memo } from 'react';
import type { TagHoverDecorProps } from './types';

const TagHoverDecor: React.FC<TagHoverDecorProps> = ({ className }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 156 48">
      <path
        fill="#D1D1D1"
        fillOpacity=".1"
        stroke="#00E5FF"
        strokeWidth="2"
        d="M155.25 13.49v33.76h-12.651v-3h-20.12v3H15.789L.75 33.667V.75h138.233l16.267 12.74Z"
      />
    </svg>
  );
};

export default memo(TagHoverDecor);
