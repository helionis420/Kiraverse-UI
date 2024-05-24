import type { FCProps } from '@/types';

export type HamburgerProps = FCProps<{
  /**
        Is Toggle status active
    */
  active: boolean;
  /**
        Toggle menu handler
    */
  onToggler: () => void;
}>;
