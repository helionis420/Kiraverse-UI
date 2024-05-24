import type { FCProps, ObjValues } from '@/types';
import type { IconIdType } from '@/ui/Icon';
import { ICON_CIRCLE_BUTTON_VARIANTS } from './constants';

export type IconCircleButtonPropsVariantType = ObjValues<typeof ICON_CIRCLE_BUTTON_VARIANTS>;

export type IconCircleButtonProps = FCProps<{
  /**
        If true, the component is disabled.
    */
  disabled?: boolean;
  /**
        If true, the component reverse.
    */
  reverse?: boolean;
  /**
        The variant to use.
    */
  variant?: IconCircleButtonPropsVariantType;
  /**
        The icon of the component.
    */
  icon?: IconIdType;
  /**
        Additional classes of the icon.
    */
  iconClassName?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
