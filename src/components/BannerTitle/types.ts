import type { FCProps, ObjValues } from '@/types';
import { BANNER_SIZES } from './constants';

export type BannerSizeType = ObjValues<typeof BANNER_SIZES>;

export type BannerTitleProps = FCProps<{
  /**
        The decor color class name.
    */
  decorColorClassName?: string;
  /**
        The holder color class name.
    */
  classNameHolder?: string;
  /**
        The size of the component.
    */
  size: BannerSizeType;
}>;
