import type { ObjValues, FCProps } from '@/types';
import { LINK_VARIANTS } from './constants';

export type LinkVariantType = ObjValues<typeof LINK_VARIANTS>;

export type LinkProps = FCProps<{
  /**
        If true, the component is disabled.
    */
  disabled?: boolean;
  /**
        If true, the component is active.
    */
  active?: boolean;
  /**
        The variant to use.
    */
  variant?: LinkVariantType;
  /**
        The underline text of component.
    */
  underline?: boolean;
  /**
      The click on  component.
    */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
