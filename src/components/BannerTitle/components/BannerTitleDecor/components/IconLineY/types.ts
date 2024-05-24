import type { FCProps, ObjValues } from '@/types';
import { ICON_LINE_Y_POSITION_SIDE } from './constants';

export type IconLineYSideType = ObjValues<typeof ICON_LINE_Y_POSITION_SIDE>;

export type IconLineYProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconLineYSideType;
}>;
