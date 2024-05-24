import type { FCProps, ObjValues } from '@/types';
import { ICON_CORNER_SM_POSITION_SIDE } from './constants';

export type IconCornerSmSideType = ObjValues<typeof ICON_CORNER_SM_POSITION_SIDE>;

export type IconCornerSmProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconCornerSmSideType;
}>;
