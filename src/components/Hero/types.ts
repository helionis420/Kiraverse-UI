import type { FCProps } from '@/types';

export type HeroProps = FCProps<{
  /**
        The URL of the background video for the inner component to display.
    */
  bgVideoSrc?: string;
  /**
        The URL of the background mobile video for the inner component to display.
    */
  bgMobVideoSrc?: string;
  /**
        The URL of the poster mobile for the inner component to display.
    */
  videoPosterSrc?: string;
  /**
        The URL of the poster mobile video for the inner component to display.
    */
  videoPosterMobSrc?: string;
}>;
