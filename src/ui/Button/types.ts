import type { FCProps, ObjValues } from '@/types';
import type { IconIdType } from '@/ui/Icon';
import { BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_ICON_SIDE } from './constants';

export type ButtonIconSideType = ObjValues<typeof BUTTON_ICON_SIDE>;

export type ButtonSizeType = ObjValues<typeof BUTTON_SIZES>;
export type ButtonVariantType = ObjValues<typeof BUTTON_VARIANTS>;

export type ButtonProps = FCProps<{
  /**
        Redirect link (page anchor, external link or internal path)
    */
  href?: string;
  /**
        If true, the component is disabled.
    */
  disabled?: boolean;
  /**
        The variant to use.
    */
  variant?: ButtonVariantType;
  /**
        The size of the component.
    */
  size?: ButtonSizeType;
  /**
        The responsive mobile size of the component.
    */
  responsive?: boolean;
  /**
        The icon side of the component.
    */
  iconSide?: ButtonIconSideType;
  /**
        The icon of the component.
    */
  icon?: IconIdType;
  /**
        Additional classes of the icon.
    */
  iconClassName?: string;
}> &
  React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>;
