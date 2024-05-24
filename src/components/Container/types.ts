import type { FCProps, ObjValues } from '@/types';
import { CONTAINER_SIZES } from './constants';

export type ButtonSizeType = ObjValues<typeof CONTAINER_SIZES>;

export type ContainerProps = FCProps<{
  /**
        The size of the component.
    */
  size?: ButtonSizeType;
  /**
        If true, indents along the x-axis with a small size
    */
  withPaddingsSmX?: boolean;
}>;
