import type { FCProps } from '@/types';

export type TagProps = FCProps<{
  /**
        If true, the component is active.
    */
  active?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
