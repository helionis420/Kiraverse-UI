import type { FCProps, ObjValues } from '@/types';
import { ICON_CORNER_LEFT_POSITION_SIDE } from './constants';

export type IconCornerLeftSideType = ObjValues<typeof ICON_CORNER_LEFT_POSITION_SIDE>;

export type IconCornerLeftProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconCornerLeftSideType;
}>;
