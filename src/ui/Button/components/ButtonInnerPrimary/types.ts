import type { FCProps, ObjValues } from '@/types';
import { BUTTON_INNER_SIZES } from '../../constants';

export type ButtonInnerSizeType = ObjValues<typeof BUTTON_INNER_SIZES>;

export type ButtonInnerProps = FCProps<{
  /**
        The hover class on the component.
    */
  hoverClassName: string;
  /**
        The active class on the component.
    */
  activeClassName: string;
  /**
        The focus class on the component.
    */
  focusClassName: string;
  /**
        The disabled class on the component.
    */
  disabledClassName: string;
  /**
        The responsive mobile size of the component.
    */
  responsive?: boolean;
  /**
        The size of the component.
    */
  size?: ButtonInnerSizeType;
}>;
