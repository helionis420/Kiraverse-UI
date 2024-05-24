import type { FCProps, ObjValues } from '@/types';
import { ICON_CORNER_POSITION_SIDE } from './constants';

export type IconCornerSideType = ObjValues<typeof ICON_CORNER_POSITION_SIDE>;

export type IconCornerProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconCornerSideType;
  /**
        The responsive mobile version of the component.
    */
  responsive?: boolean;
}>;
