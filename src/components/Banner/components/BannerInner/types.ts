import type { FCProps } from '@/types';
import type { InnerBlockSizeType } from '../../types';

export type BannerInnerProps = FCProps<{
  /**
        The hover class on the component.
    */
  hoverClassName: string;
  /**
        If true, the component with background image.
    */
  withInnerImage?: boolean;
  /**
      The URL of the background image to display.
    */
  innerImgSrc?: string;
  /**
        The size of the component.
    */
  size?: InnerBlockSizeType;
}>;
