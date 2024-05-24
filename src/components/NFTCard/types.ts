import type { FCProps } from '@/types';

export type NFTCardProps = FCProps<{
  /**
      The URL of the image to display.
    */
  imgSrc?: string;
  /**
      The alternative text to display for image accessibility.
    */
  imgAlt?: string;
  /**
      The name a player character.
    */
  name: string;
  /**
      The nick name a creator.
    */
  nick?: string;
  /**
        Redirect link
    */
  href: string;
}>;
