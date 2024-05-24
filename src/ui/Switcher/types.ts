import type { WithClassName } from '@/types';

export type SwitcherProps = WithClassName<{
  /**
        Is switcher checked
    */
  checked: boolean;
  /**
        Is switcher disabled ti change
    */
  disabled?: boolean;
  /**
        Check change handler
    */
  onCheckedChange: (checked: boolean) => void;
}> &
  Omit<React.ComponentProps<'button'>, 'ref'>;
