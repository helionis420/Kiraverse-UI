import type { WithClassName } from '@/types';
import { PARTNERS_NAMES } from './constants';

export type PartnerName = (typeof PARTNERS_NAMES)[number];

export type PartnerLogoProps = WithClassName<{
  /**
      Partner name
    */
  name: PartnerName;
}>;
