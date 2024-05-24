import type { FCProps, ObjValues } from '@/types';
import { ICON_CAPTION_LINE_POSITION_SIDE } from '@/ui/Caption/constants';

export type IconPositionSideType = ObjValues<typeof ICON_CAPTION_LINE_POSITION_SIDE>;

export type IconCaptionLineMobileProps = FCProps<{
  /**
        The position side of the component.
    */
  side?: IconPositionSideType;
}>;
