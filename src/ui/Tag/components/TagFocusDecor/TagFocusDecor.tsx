import { memo } from 'react';
import type { TagFocusDecorProps } from './types';

const TagFocusDecor: React.FC<TagFocusDecorProps> = ({ className }) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 156 48">
      <path
        fill="none"
        stroke="#BCB4DE"
        strokeWidth="2"
        d="M155 13.612V47h-12.151v-3h-20.62v3H15.885L1 33.556V1h137.897L155 13.612Z"
      />
    </svg>
  );
};

export default memo(TagFocusDecor);
