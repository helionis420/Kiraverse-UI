import type { WithClassName } from '@/types';

export type PlayerItemProps = WithClassName<{
  /**
        Player name
    */
  name: string;
  /**
        Player place
    */
  place: number;
  /**
        Player avatar url
    */
  avatarUrl: string;
}>;
