import type { FCProps, ObjValues } from '@/types';
import { ICON_LINE_Y_SM_POSITION_SIDE } from './constants';

export type IconLineYSmSideType = ObjValues<typeof ICON_LINE_Y_SM_POSITION_SIDE>;

export type IconLineYSmProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconLineYSmSideType;
}>;
