import type { FCProps, ObjValues } from '@/types';
import { ICON_LINE_X_POSITION_SIDE } from './constants';

export type IconLineXSideType = ObjValues<typeof ICON_LINE_X_POSITION_SIDE>;

export type IconLineXProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconLineXSideType;
}>;
