import type { ObjValues, WithClassName } from '@/types';
import { ICON_IDS, ICON_SIZES } from './constants';

export type IconIdType = (typeof ICON_IDS)[number];

export type IconSizeType = ObjValues<typeof ICON_SIZES>;

export type IconProps = WithClassName<{
  /**
        Id of icon.
    */
  id: IconIdType;
  /**
        The size of the component.
    */
  size?: IconSizeType;
}>;
