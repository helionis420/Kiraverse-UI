import type { FCProps, ObjValues } from '@/types';
import { ICON_CORNER_RIGHT_POSITION_SIDE } from './constants';

export type IconCornerRightSideType = ObjValues<typeof ICON_CORNER_RIGHT_POSITION_SIDE>;

export type IconCornerRightProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconCornerRightSideType;
}>;
