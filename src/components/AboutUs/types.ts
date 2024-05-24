import type { FCProps } from '@/types';

export type AboutUsProps = FCProps<{
  /**
      The title of component.
    */
  title: string;
  /**
      The video src.
    */
  videoSrc?: string;
  /**
      The video mobile src.
    */
  videoMobSrc?: string;
  /**
        Redirect link to full video
    */
  urlToVideo?: string;
}>;
