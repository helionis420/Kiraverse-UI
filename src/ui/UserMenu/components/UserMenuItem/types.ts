import type { WithClassName } from '@/types';
import type { IconIdType } from '@/ui/Icon';

export type UserMenuItemProps = WithClassName<{
  /**
      Icon id from the icon sprite.
    */
  iconId: IconIdType;
  /**
      Label for the menu item.
    */
  label: string;
  /**
      Callback to execute on click.
    */
  onClick?: () => void;
  disabled?: boolean;
}>;
