import type { FCProps } from '@/types';

export type NavProps = FCProps<{
  /**
        If true, mobile menu open.
    */
  active: boolean;
  /**
        If true, mobile menu hidden no transition.
    */
  hidden: boolean;
  /**
        The close menu handler
    */
  onMenuClose: () => void;
}>;
