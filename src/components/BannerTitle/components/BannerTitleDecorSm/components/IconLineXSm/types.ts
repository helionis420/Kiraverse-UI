import type { FCProps, ObjValues } from '@/types';
import { ICON_LINE_X_SM_POSITION_SIDE } from './constants';

export type IconLineXSmSideType = ObjValues<typeof ICON_LINE_X_SM_POSITION_SIDE>;

export type IconLineXSmProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconLineXSmSideType;
}>;
