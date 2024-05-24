import type { FCProps } from '@/types';
import type { IconIdType } from '@/ui/Icon';

export type CircleButtonProps = FCProps<{
  /**
        The icon to display in the button.
    */
  iconId?: IconIdType;
  /**
        Top caption text
    */
  topCaption?: string;
  /**
        Bottom caption text
    */
  bottomCaption?: string;
  /**
        Left caption text
    */
  leftCaption?: string;
  /**
        Right caption text
    */
  rightCaption?: string;
  /**
        Click handler
    */
  onClick?: () => void;
  /**
        Redirect link (page anchor, external link or internal path)
    */
  href?: string;
}>;
