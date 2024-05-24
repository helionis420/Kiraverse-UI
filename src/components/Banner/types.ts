import type { FCProps, ObjValues } from '@/types';
import { INNER_BLOCK_SIZES } from './constants';

export type InnerBlockSizeType = ObjValues<typeof INNER_BLOCK_SIZES>;

export type BannerProps = FCProps<{
  /**
        If true, the inner visible.
    */
  withInnerBlock?: boolean;
  /**
        If true, the inner component with background image.
    */
  withInnerImage?: boolean;
  /**
        The URL of the background image for the inner component to display.
    */
  innerImgSrc?: string;
  /**
        The size of the inner component.
    */
  innerBlockSize: InnerBlockSizeType;
  /**
        The responsive with icons mobile version of the component.
    */
  withIconsResponsive?: boolean;
}>;
